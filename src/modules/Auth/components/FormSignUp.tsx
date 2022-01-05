import React, { useState } from 'react';
import {
  Grid,
  Stack,
  Checkbox,
  Button,
  FormControlLabel,
  Typography,
  InputAdornment,
  IconButton
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAppDispatch } from 'common/hooks';
import { ILoginForm, useSelectAuthLoading } from 'modules/Auth';
import { useSnackbar } from 'notistack';
import { EnhanceLink, RHFTextField } from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { schemaValidateSignUp } from 'modules/Auth/schema';
import { login } from '../redux/async-thunk';
import { useAuthStyles } from 'themes';

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirm: ''
};

export const SignUpForm: React.FC = () => {
  const classes = useAuthStyles();
  const dispatch = useAppDispatch();
  const isLoading = useSelectAuthLoading();
  const { enqueueSnackbar } = useSnackbar();
  const [checked, setChecked] = useState<boolean>(true);

  // Handle show password
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] =
    useState<boolean>(false);

  const handleClickShowPassword = (type: string) => {
    type === 'password'
      ? setShowPassword(!showPassword)
      : setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  // useForm
  const methods = useForm<ILoginForm>({
    defaultValues: defaultValues,
    resolver: yupResolver(schemaValidateSignUp)
  });
  const { control, handleSubmit } = methods;

  // Submit
  const onSubmit = async (data: ILoginForm) => {
    await dispatch(login(data))
      .unwrap()
      .then((res: any) => enqueueSnackbar('Login success!'))
      .catch((err: any) => enqueueSnackbar(err.message, { variant: 'error' }));
  };

  return (
    <>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <RHFTextField
                id="signUp-firstname"
                variant="outlined"
                fullWidth
                name="firstName"
                label="First Name"
                control={control}
                disabled={isLoading === 'pending'}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RHFTextField
                id="signUp-lastname"
                variant="outlined"
                fullWidth
                name="lastName"
                label="Last Name"
                control={control}
                disabled={isLoading === 'pending'}
              />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField
                id="signUp-email"
                variant="outlined"
                fullWidth
                name="email"
                label="Email"
                control={control}
                disabled={isLoading === 'pending'}
              />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField
                id="signUp-password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                control={control}
                disabled={isLoading === 'pending'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword('password')}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="small"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField
                id="signUp-password-comfirm"
                type={showPasswordConfirm ? 'text' : 'password'}
                name="passwordConfirm"
                label="Password Confirm"
                variant="outlined"
                fullWidth
                control={control}
                disabled={isLoading === 'pending'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          handleClickShowPassword('passwordComfirm')
                        }
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="small"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <ReCAPTCHA
                size="normal"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" alignItems="center">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event: any) =>
                        setChecked(event.target.checked)
                      }
                      name="checked"
                      color="primary"
                    />
                  }
                  label={
                    <Typography color="textPrimary" variant="subtitle2">
                      Agree with
                    </Typography>
                  }
                  sx={{ marginRight: '4px' }}
                />
                <EnhanceLink
                  variant="subtitle2"
                  name="Terms & Condition."
                  url="/account/term"
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                className={classes.button}
                disabled={isLoading === 'pending'}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography color="textSecondary">
            Already have an account?
          </Typography>
          <EnhanceLink
            name="Login"
            url="/account/signin"
            underline="none"
            sx={{ ml: '4px' }}
          />
        </Stack>
      </Grid>
    </>
  );
};
