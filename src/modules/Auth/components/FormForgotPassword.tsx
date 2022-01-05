import React from 'react';
import { Grid, Button, Stack, Typography } from '@mui/material';
import { useAppDispatch } from 'common/hooks';
import { ILoginForm, useSelectAuthLoading } from 'modules/Auth';
import { useSnackbar } from 'notistack';
import { EnhanceLink, RHFTextField } from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaValidateForgotPassword } from 'modules/Auth/schema';
import { login } from '../redux/async-thunk';
import { useAuthStyles } from 'themes';

const defaultValues = {
  email: ''
};

export const ForgotPasswordForm: React.FC = () => {
  const classes = useAuthStyles();
  const dispatch = useAppDispatch();
  const isLoading = useSelectAuthLoading();
  const { enqueueSnackbar } = useSnackbar();

  // useForm
  const methods = useForm<ILoginForm>({
    defaultValues: defaultValues,
    resolver: yupResolver(schemaValidateForgotPassword)
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
            <Grid item xs={12}>
              <RHFTextField
                id="forgotPassword-email"
                variant="outlined"
                fullWidth
                name="email"
                label="Email"
                control={control}
                disabled={isLoading === 'pending'}
              />
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
                Send Mail
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
