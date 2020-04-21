import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Typography } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import EventIcon from '@material-ui/icons/Event';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HistoryIcon from '@material-ui/icons/History';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import { SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingTop: theme.spacing(2)
  },
  menuText: { marginLeft: theme.spacing(3), color: '#999999' },
  nav: {
    marginBottom: theme.spacing(2)
  },
  icon: { color: 'gray' }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <PublicIcon />
    },
    {
      title: 'About',
      href: '/users',
      icon: <InfoIcon />
    },
    {
      title: 'Event',
      href: '/products',
      icon: <EventIcon />
    },
    {
      title: 'News',
      href: '/news',
      icon: <LibraryBooksIcon />
    },
    {
      title: 'History',
      href: '/typography',
      icon: <HistoryIcon />
    },
    {
      title: 'Contact',
      href: '/account',
      icon: <ContactMailIcon />
    },
    {
      title: 'Setting',
      href: '/settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Typography
          align="left"
          className={classes.menuText}
          variant="h6"
        >
          MAIN MENU
        </Typography>
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
