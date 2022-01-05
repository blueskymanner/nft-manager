import React, { useState } from 'react';
import {
  Grid,
  Stack,
  Checkbox,
  Button,
  FormControlLabel,
  Typography,
  InputAdornment,
  IconButton,
  Divider
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAppDispatch } from 'common/hooks';
import { ILoginForm, useSelectAuthLoading } from 'modules/Auth';
import { useSnackbar } from 'notistack';
import { EnhanceLink, RHFTextField } from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaValidateSignIn } from 'modules/Auth/schema';
import { login } from '../redux/async-thunk';
import Image from 'next/image';
import GoogleIcon from '@public/images/icon-google.svg';
import { useAuthStyles } from 'themes';
import { redirect } from 'utils';
import { setToken } from 'common/localStorage';

const defaultValues = {
  email: '',
  password: ''
};

export const SignInForm: React.FC = () => {
  const classes = useAuthStyles();
  const dispatch = useAppDispatch();
  const isLoading = useSelectAuthLoading();
  const { enqueueSnackbar } = useSnackbar();
  const [checked, setChecked] = useState<boolean>(true);

  // Handle show password
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  // useForm
  const { control, handleSubmit } = useForm<ILoginForm>({
    defaultValues: defaultValues,
    resolver: yupResolver(schemaValidateSignIn)
  });

  // Submit
  const onSubmit = async (data: ILoginForm) => {
    await dispatch(login(data))
      .unwrap()
      .then((res: any) => {
        if (res) {
          setToken('aaa');
          redirect('/dashboard');
          enqueueSnackbar('Login success!');
        }
      })
      .catch((err: any) => enqueueSnackbar(err.message, { variant: 'error' }));
  };

  return (
    <>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <RHFTextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                disabled={isLoading === 'pending'}
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                control={control}
                fullWidth
                disabled={isLoading === 'pending'}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        size="small"
                        onMouseDown={handleMouseDownPassword}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      name="checked"
                      color="primary"
                      checked={checked}
                      onChange={(event: any) =>
                        setChecked(event.target.checked)
                      }
                    />
                  }
                  label={
                    <Typography color="textPrimary" variant="subtitle2">
                      Remeber me
                    </Typography>
                  }
                />
                <EnhanceLink
                  name="Forgot Password?"
                  url="/account/forgot-password"
                  color="primary"
                  variant="subtitle2"
                  underline="none"
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={2}>
                <Button
                  type="submit"
                  color="primary"
                  variant="outlined"
                  fullWidth
                  className={classes.button}
                  disabled={isLoading === 'pending'}
                >
                  Login
                </Button>
                <Divider>OR</Divider>
                <Button
                  type="button"
                  color="primary"
                  variant="contained"
                  fullWidth
                  className={classes.button}
                  disabled={isLoading === 'pending'}
                >
                  Login with Blocto wallet
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12}>
        <Button
          type="button"
          variant="outlined"
          fullWidth
          className={classes.button}
          startIcon={<Image src={GoogleIcon} width={20} height={20} />}
          sx={{
            backgroundColor: '#2D3748',
            color: '#fff',
            '&:hover': { color: '#2D3748', borderColor: '#2D3748' }
          }}
        >
          Login with google
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography color="textSecondary">Dont have an account?</Typography>
          <EnhanceLink
            name="Join free today"
            url="/account/signup"
            underline="none"
            sx={{ ml: '4px' }}
          />
        </Stack>
      </Grid>
    </>
  );
};
