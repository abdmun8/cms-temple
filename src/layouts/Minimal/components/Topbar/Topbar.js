import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  headerTitle: { color: '#333333', marginLeft: theme.spacing(2) },
  img: { marginLeft: theme.spacing(2), height: theme.spacing(4) }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="inherit"
      position="fixed"
      style={{
        boxShadow:
          '0 3px 3px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)'
      }}
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
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
