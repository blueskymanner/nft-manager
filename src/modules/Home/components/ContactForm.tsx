import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Button,
  InputAdornment
} from '@mui/material';
import { useSelectAuthLoading } from 'modules/Auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaValidateContactForm } from '../schema';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { FadeInSection } from 'hooks';
import { RHFTextField } from 'components';

const defaultValues = {
  email: '',
  message: ''
};

interface IContactFormInput {
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const isLoading = useSelectAuthLoading();
  // useForm
  const methods = useForm<IContactFormInput>({
    defaultValues: defaultValues,
    resolver: yupResolver(schemaValidateContactForm)
  });
  const { control, handleSubmit } = methods;
  // Submit
  const onSubmit = async (data: IContactFormInput) => {
    console.log(data);
  };
  return (
    <div
      style={{
        padding: '140px 0',
        background: 'linear-gradient(180deg, #4E2699 0%, #B72EBE 100%)'
      }}
    >
      <Container>
        <FadeInSection>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography color="white" variant="h2" sx={{ mb: '20px' }}>
                Launching a raffle campaign?
              </Typography>
              <Typography
                color="white"
                variant="h6"
                sx={{ mb: 2, fontWeight: 400 }}
              >
                Let us help. Drop us a line!
              </Typography>
              <Typography color="white" sx={{ fontWeight: 700 }}>
                Contact: team@velvet.zone
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <RHFTextField
                  id="contact-email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  placeholder="name@email.com"
                  control={control}
                  disabled={isLoading === 'pending'}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon color="secondary" />
                      </InputAdornment>
                    ),
                    sx: { backgroundColor: '#FFF', borderRadius: '8px' }
                  }}
                />
                <RHFTextField
                  id="contact-message"
                  placeholder="how can we help you?"
                  name="message"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  rows={7}
                  control={control}
                  InputProps={{
                    sx: { backgroundColor: '#FFF', borderRadius: '8px' }
                  }}
                />
                <Button
                  id="contact-button"
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isLoading === 'pending'}
                  sx={{ padding: '16px 8px', borderRadius: '40px', mt: '16px' }}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </FadeInSection>
      </Container>
    </div>
  );
};
