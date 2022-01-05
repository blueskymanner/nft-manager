import React, { useState } from 'react';
import {
  Box,
  Button,
  InputLabel,
  FormGroup,
  Typography,
  Grid,
  FormHelperText,
  FormControl,
  RadioGroup,
  Radio,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Divider,
  FormControlLabel
} from '@mui/material';
import { theme, useFormStyles, usePostStyles } from 'themes';
import { BoxValue, EnhanceCountDown } from 'components';
import RaffleImage from '@public/images/default.png';
import { useAppDispatch } from 'common/hooks';
import { actionsApp } from 'modules/App';
import { actionsPost } from '../redux';
import { useSnackbar } from 'notistack';
import Image from 'next/image';

export const PostCreatePreview: React.FC = () => {
  const classes = useFormStyles();
  const classesPost = usePostStyles();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const data = [];

  const handleSubmit = () => {
    dispatch(actionsPost.createPost(data))
      .unwrap()
      .then(res => console.log(res));
    // .catch((err: any) => enqueueSnackbar(err.message, { variant: 'error' }));
    dispatch(actionsApp.handleShowLoading(true));
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <FormGroup>
            <InputLabel htmlFor="formCreate-raffleName">Raffle name</InputLabel>
            <Box mt={1.5}>
              <Typography variant="h5">Lorem ipsum dolor sit amet</Typography>
            </Box>
            <Box mt={2}>
              <Image
                src={RaffleImage}
                alt="RaffleImage"
                className={classesPost.image}
              />
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.disabled }}
              >
                name of the imafe.jpg
              </Typography>
            </Box>
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <FormGroup>
            <InputLabel>Select Influencer</InputLabel>
            <Box mt={1.5}>
              <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                  aria-label="Select Influencer"
                  name="influencer"
                  sx={{ mb: 0 }}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="secondary" checked />}
                    label="Influencer Name"
                    className={classes.radioGroupItem}
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <FormGroup>
            <InputLabel htmlFor="formCreate-raffleDescription">
              Raffle description
            </InputLabel>

            <Box mt={1.5}>
              <Typography sx={{ color: '#545454' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque convallis lectus felis neque volutpat nisl. Hac
                quis sed sed tincidunt. Velit arcu a gravida eget mauris lectus.
                Dis eget neque quis massa. Cursus aliquet malesuada sed aliquam
                metus.
              </Typography>
            </Box>
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <FormGroup>
            <Divider />
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <FormGroup>
                <InputLabel htmlFor="formCreate-campaignTimeStart">
                  Campaign Start
                </InputLabel>
                <BoxValue text="00 / 00 / 0000 at 23:00 +GMT" />
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormGroup>
                <InputLabel htmlFor="formCreate-timeCampaignEnd">
                  Campaign End
                </InputLabel>
                <BoxValue text="00 / 00 / 0000 at 23:00 +GMT" />
              </FormGroup>
            </Grid>

            <Grid item xs={12}>
              <FormGroup>
                <Typography
                  color="secondary"
                  variant="caption"
                  sx={{ letterSpacing: '1px', mb: 1 }}
                >
                  Raffle Reveal
                </Typography>
                <EnhanceCountDown
                  dateStart={1607110465663}
                  dateEnd={1607110465663}
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <FormGroup>
            <Divider />
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={6}>
              <FormGroup>
                <InputLabel htmlFor="formCreate-pricePerTicket">
                  Price per ticket (USD)
                </InputLabel>
                <BoxValue text="$56,99" />
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <Typography color="textDisabled" sx={{ fontSize: '13px' }}>
                User buys with Stripe (with buffer for conversion fees)
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <FormGroup>
            <Divider />
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <FormGroup>
                <InputLabel htmlFor="formCreate-maximunPurchasePerWallet">
                  Maximum purchase per wallet:
                </InputLabel>
                <FormHelperText sx={{ color: theme.palette.text.disabled }}>
                  (up to $9000 worth per raffle)
                </FormHelperText>
                <BoxValue text="$3.000,99" />
              </FormGroup>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <FormGroup>
            <Divider />
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <FormGroup>
                <InputLabel htmlFor="formCreate-totalTicketAvailable">
                  Total tickets available
                </InputLabel>
                <FormHelperText sx={{ color: theme.palette.text.disabled }}>
                  (1, …, 25,000)
                </FormHelperText>
                <BoxValue text="15 tickets" />
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormGroup>
                <InputLabel htmlFor="formCreate-totalNumberWinner">
                  Total number of winners
                </InputLabel>
                <FormHelperText sx={{ color: theme.palette.text.disabled }}>
                  (1, 3, 5, 10, 20, 50, 100)
                </FormHelperText>
                <BoxValue text="70 winners" />
              </FormGroup>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box mt={3} display="flex" justifyContent="end">
            <Button
              onClick={() => setOpen(true)}
              sx={{
                color: theme.palette.text.disabled,
                mr: 1.5
              }}
            >
              Cancel
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleSubmit}>
              PUBLISH
            </Button>
          </Box>
        </Grid>
      </Grid>
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
            autoFocus
            onClick={() => setOpen(false)}
            sx={{
              color: theme.palette.text.disabled
            }}
          >
            Cancel
          </Button>
          <Button type="button">Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
