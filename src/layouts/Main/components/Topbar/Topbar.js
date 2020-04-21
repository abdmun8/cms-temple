import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  Badge,
  Hidden,
  IconButton,
  Typography,
  Avatar,
  Grid
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificatinIcon from 'icons/Telkomsel/Notification';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
// import white from '@material-ui/core/colors/white';

const useStyles = makeStyles(theme => ({
  root: {
    // boxShadow: 'none'
    // alignItems: 'f',
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  headerTitle: { color: '#333333', marginLeft: theme.spacing(2) },
  img: { marginLeft: theme.spacing(2), height: theme.spacing(4) },
  icon: {
    color: theme.palette.text.primary,
    height: 30,
    width: 30
  },
  account: { marginLeft: theme.spacing(2) },
  accountName: { color: theme.palette.black },
  accountTittle: { fontSize: 12, marginTop: -theme.spacing(1) },
  iconDropDown: { marginLeft: theme.spacing(2), marginBottom: theme.spacing(2) }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="inherit"
    >
      <Toolbar>
        <img
          alt="Logo"
          className={classes.img}
          src="/images/logos/logo-koil-only.png"
        />
        <RouterLink to="/">
          <Typography
            className={classes.headerTitle}
            variant="h4"
          >
            Sri Raja Rajesweri Amman Koil
          </Typography>
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificatinIcon className={classes.icon} />
            </Badge>
          </IconButton>
          <Avatar>B</Avatar>
          <Grid className={classes.account}>
            <Grid item>
              <Typography
                className={classes.accountName}
                variant="h5"
              >
                Budi Santoso
              </Typography>
              <Typography className={classes.accountTittle}>
                Account Manager
              </Typography>
            </Grid>
          </Grid>
          <ArrowDownIcon className={classes.iconDropDown} />
          {/* <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton> */}
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
