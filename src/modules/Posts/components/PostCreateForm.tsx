import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  InputLabel,
  FormGroup,
  Typography,
  Grid,
  FormHelperText,
  InputAdornment,
  FormControl,
  Radio,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  FormLabel,
  TextField
} from '@mui/material';
import {
  RHFTextField,
  RHFUpload,
  RHFRadio,
  RHFDateTimePicker
} from 'components/RHForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ICreateForm } from '../types';
import { schemaPostCreate } from '../schema';
import { theme, useFormStyles } from 'themes';
import { convertUTCtoTimestamp, formatDMY } from 'utils/formatTime';

const formdata = {
  name: '',
  image: 'default.png',
  influencer: '1',
  description: '',
  timeStart: null,
  timeEnd: null,
  price: 0,
  paymentMethod: 'option1',
  walletQuantity: 0,
  totalTicket: 0,
  numberOfWinners: 0
};

interface PostCreateFormProps {
  onShowPreview: (show: boolean) => void;
}

export const PostCreateForm: React.FC<PostCreateFormProps> = ({
  onShowPreview
}) => {
  const maxLength = 255;
  const classes = useFormStyles();
  const [open, setOpen] = useState(false);
  const [countTextAreaLength, setCountTextAreaLength] = useState(maxLength);

  // Validate and submit
  const { handleSubmit, control, watch } = useForm<ICreateForm>({
    defaultValues: formdata,
    resolver: yupResolver(schemaPostCreate)
  });

  // Handle count textarea length
  const textAreaValue = watch().description?.length || 0;
  useMemo(
    () => setCountTextAreaLength(maxLength - textAreaValue),
    [textAreaValue]
  );

  // Submit
  const onSubmit = async (data: ICreateForm) => {
    // const a = convertUTCtoTimestamp(data.timeStart);
    // console.log('aaaaaa', a);
    // console.log(formatDMY(a);
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Grid container>
          <Grid item xs={12}>
            <FormGroup>
              <InputLabel htmlFor="name">Raffle name</InputLabel>
              <RHFTextField
                id="name"
                name="name"
                margin="normal"
                variant="outlined"
                placeholder="Your raffle’s title. Visible to everyone."
                control={control}
                fullWidth
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <InputLabel>Upload Image</InputLabel>
              <RHFUpload name="image" control={control} />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <InputLabel>Select Influencer</InputLabel>
              <Box className={classes.boxRadioGroup}>
                <RHFRadio
                  id="influencer"
                  name="influencer"
                  control={control}
                  className="mb-0"
                  options={[
                    {
                      value: '1',
                      control: <Radio color="default" />,
                      label: 'Influencer Name'
                    },
                    {
                      value: '2',
                      control: <Radio color="default" />,
                      label: 'Influencer Name'
                    },
                    {
                      value: '3',
                      control: <Radio color="default" />,
                      label: 'Influencer Name'
                    },
                    {
                      value: '4',
                      control: <Radio color="default" />,
                      label: 'Influencer Name'
                    },
                    {
                      value: '5',
                      control: <Radio color="default" />,
                      label: 'Influencer Name'
                    },
                    {
                      value: '6',
                      control: <Radio color="default" />,
                      label: 'Influencer Name'
                    },
                    {
                      value: '7',
                      control: <Radio color="default" />,
                      label: 'Influencer Name'
                    },
                    {
                      value: '8',
                      control: <Radio color="default" />,
                      label: 'Influencer Name'
                    }
                  ]}
                />
              </Box>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup className="form-control-textarea">
              <InputLabel htmlFor="description">Raffle description</InputLabel>
              <RHFTextField
                id="description"
                name="description"
                margin="normal"
                variant="outlined"
                placeholder="Your Raffle description"
                control={control}
                rows={7}
                multiline
                fullWidth
                inputProps={{ maxLength: maxLength }}
              />
              <Typography
                variant="caption"
                align="right"
                className="textarea-counter"
                sx={{ color: '#BDBDBD' }}
              >
                {countTextAreaLength} character max.
              </Typography>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <FormGroup>
                  <InputLabel htmlFor="timeStart">Campaign Start</InputLabel>
                  <RHFDateTimePicker name="timeStart" control={control} />
                </FormGroup>
              </Grid>
              <Grid item xs={6}>
                <FormGroup>
                  <InputLabel htmlFor="timeStart">Campaign End</InputLabel>
                  <RHFDateTimePicker name="timeEnd" control={control} />
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={8} alignItems="center">
              <Grid item xs={6}>
                <FormGroup>
                  <InputLabel htmlFor="price">
                    Price per ticket (USD)
                  </InputLabel>
                  <RHFTextField
                    id="price"
                    name="price"
                    type="number"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    control={control}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      )
                    }}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset">
                  <RHFRadio
                    id="paymentMethod"
                    name="paymentMethod"
                    control={control}
                    sx={{ fontSize: '14px' }}
                    options={[
                      {
                        value: 'option1',
                        control: <Radio size="small" color="default" />,
                        label: (
                          <Typography
                            color="textDisabled"
                            sx={{ fontSize: '13px' }}
                          >
                            Tickets are sold via Stripe.
                          </Typography>
                        )
                      },
                      {
                        value: 'option2',
                        control: <Radio size="small" color="default" />,
                        label: (
                          <Typography
                            color="textDisabled"
                            sx={{ fontSize: '13px' }}
                          >
                            Velvet pays out proceeds less Velvet fees to
                            influencer in USD
                          </Typography>
                        )
                      }
                    ]}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <FormGroup>
                  <InputLabel htmlFor="walletQuantity">
                    Maximum purchase per wallet:
                  </InputLabel>
                  <FormHelperText sx={{ color: theme.palette.text.disabled }}>
                    (up to $9000 worth per raffle)
                  </FormHelperText>
                  <RHFTextField
                    id="walletQuantity"
                    name="walletQuantity"
                    type="number"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    control={control}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      )
                    }}
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <FormGroup>
                  <InputLabel htmlFor="totalTicket">
                    Total tickets available
                  </InputLabel>
                  <FormHelperText sx={{ color: theme.palette.text.disabled }}>
                    (1, …, 25,000)
                  </FormHelperText>
                  <RHFTextField
                    id="totalTicket"
                    name="totalTicket"
                    type="number"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    control={control}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={6}>
                <FormGroup>
                  <InputLabel htmlFor="numberOfWinners">
                    Total number of winners
                  </InputLabel>
                  <FormHelperText sx={{ color: theme.palette.text.disabled }}>
                    (1, 3, 5, 10, 20, 50, 100)
                  </FormHelperText>
                  <RHFTextField
                    id="numberOfWinners"
                    name="numberOfWinners"
                    type="number"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    control={control}
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box mt={3} display="flex" justifyContent="end">
              <Button
                type="button"
                onClick={() => setOpen(true)}
                sx={{
                  color: theme.palette.text.disabled,
                  mr: 1.5
                }}
              >
                Cancel
              </Button>
              <Button type="submit" variant="outlined" color="secondary">
                SAVE AND CONTINUE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
      <Dialog
        maxWidth="xs"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 1.5 }}>
          <Button
            type="button"
            autoFocus
            onClick={() => setOpen(false)}
            sx={{
              color: theme.palette.text.disabled
            }}
          >
            Cancel
          </Button>
          <Button type="button" onClick={() => onShowPreview(true)}>
            Comfirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
