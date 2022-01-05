import React from 'react';
import { Box, Grid, Typography, Stack, Chip, Theme } from '@mui/material';
import { EnhanceImage, EnhanceLink } from 'components';
import { IPost } from 'modules/Posts';
import { usePostStyles } from 'themes';
import Truncate from 'react-truncate';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  thumbnailSize: {
    paddingBottom: '100%',
    borderRadius: '50%'
  }
}));
interface PostItemProps extends IPost {
  hasUserDetail?: boolean;
}
export const PostItem: React.FC<PostItemProps> = ({
  id,
  name,
  image,
  influencer,
  description
}) => {
  const classes = useStyles();
  const classesPost = usePostStyles();

  return (
    <EnhanceLink url={`/post/${id}`} className={classesPost.link}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6} lg={3}>
          <Stack direction="row">
            <Box width="56px">
              <EnhanceImage
                imageUrl={image as any}
                className={classes.thumbnailSize}
              />
            </Box>
            <Box ml={2}>
              <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                {name}
              </Typography>
              <Typography component="div">
                <Chip
                  label="Active"
                  color="success"
                  className={classesPost.label}
                />
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Typography>{influencer}</Typography>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Typography>{influencer}</Typography>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Typography>
            <Truncate lines={2}>{description}</Truncate>
          </Typography>
        </Grid>
      </Grid>
    </EnhanceLink>
  );
};
