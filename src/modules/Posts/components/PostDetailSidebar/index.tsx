import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Badge,
  IconButton,
  Menu,
  Fade,
  MenuItem,
  ListItemIcon
} from '@mui/material';
import { IPost } from '../../types';
import defaultImg from '@public/images/default.png';
import { EnhanceCountDown } from 'components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Truncate from 'react-truncate';
import { useCommonStyles } from 'themes';

export const PostDetailSidebar: React.FC<IPost> = ({
  userId,
  name,
  image,
  influencer,
  description,
  timeStart,
  timeEnd,
  price,
  paymentMethod,
  walletQuantity,
  totalTicket,
  numberOfWinners,
  status,
  winners,
  disabled,
  isFeature
}) => {
  const classes = useCommonStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [feature, setFeature] = useState(false);
  const open = Boolean(anchorEl);

  const dateStart = new Date(timeStart as number)
    .toLocaleString()
    .split(',')[0];
  const dateEnd = new Date(timeStart as number).toLocaleString().split(',')[0];

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSetFeature = () => {
    setFeature(!feature);
  };

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        alt={name}
        height="315"
        image={`/images/${image ? image : defaultImg.src}`}
        title={name}
      />
      <CardContent sx={{ pt: 3 }}>
        <Box display="flex" alignItems="center" mb={1}>
          <Badge
            overlap="circular"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            variant="dot"
            color="success"
          >
            <Avatar alt="Remy Sharp" src="/images/artist1.jpg" />
          </Badge>
          <Typography sx={{ ml: '12px', flex: 1 }}>
            <Truncate lines={1}>{influencer}</Truncate>
          </Typography>
          <Box ml="auto" mr={-1}>
            <IconButton size="small" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              MenuListProps={{
                'aria-labelledby': 'fade-button'
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem>
                <ListItemIcon sx={{ minWidth: '32px' }}>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">Edit</Typography>
                </ListItemText>
              </MenuItem>
              <MenuItem onClick={handleSetFeature}>
                <ListItemIcon>
                  <FavoriteIcon
                    fontSize="small"
                    color={feature ? 'secondary' : undefined}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">Feature</Typography>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">Delete</Typography>
                </ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" mb={1}>
          <Typography variant="h6" component="h3">
            <Truncate lines={1}>{name}</Truncate>
          </Typography>
          <CheckCircleIcon
            sx={{
              fontSize: '16px',
              color: '#56CCF2',
              ml: 1,
              flexShrink: 0
            }}
          />
        </Box>

        <Typography
          variant="h6"
          color="secondary"
          sx={{ fontSize: '18px', my: 1 }}
        >
          $ {price}
        </Typography>

        <Typography color="text.disabled" variant="body2">
          {description}
        </Typography>
        <Divider sx={{ mt: 4 }} />

        <List>
          <ListItem>
            <ListItemText
              primary={
                <Box display="flex" alignItems="center">
                  <FiberManualRecordIcon
                    color="disabled"
                    sx={{ fontSize: '8px', mr: 1.2 }}
                  />
                  <Typography color="text.disabled">
                    End date: {dateStart}
                  </Typography>
                </Box>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Box display="flex" alignItems="center" mt={-1}>
                  <FiberManualRecordIcon
                    color="disabled"
                    sx={{ fontSize: '8px', mr: 1.2 }}
                  />
                  <Typography color="text.disabled">
                    End date: {dateEnd}
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Box display="flex" alignItems="center">
                  <FiberManualRecordIcon
                    color="disabled"
                    sx={{ fontSize: '8px', mr: 1.2 }}
                  />
                  <Typography color="text.disabled">
                    Total tickets available: 15
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        </List>
        <Divider sx={{ mb: 4 }} />

        <Box mb={2}>
          <Typography
            component="div"
            variant="caption"
            sx={{
              letterSpacing: '1px',
              mb: 2,
              fontWeight: 700,
              marginBottom: 2
            }}
          >
            Raffle Reveal
          </Typography>
          <EnhanceCountDown
            variant="2"
            dateStart={timeStart}
            dateEnd={timeEnd}
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          className={classes.btnCustom}
          fullWidth
        >
          Select 2 Winners
        </Button>
      </CardContent>
    </Card>
  );
};
