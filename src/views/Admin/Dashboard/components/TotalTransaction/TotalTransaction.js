import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TransactionIcon from 'icons/Telkomsel/Transaction';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    borderRadius: 10
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700,
    textTransform: 'none'
  },
  avatar: {
    backgroundColor: theme.palette.white,
    height: 56,
    width: 56
  },
  icon: {
    color: theme.palette.text.primary,
    height: 45,
    width: 45
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: '#E82429'
  },
  differenceValue: {
    color: '#E82429',
    marginRight: theme.spacing(1)
  },
  moneyText: {
    color: '#BB010A',
    fontWeight: 'bold'
  }
}));

const Budget = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Avatar className={classes.avatar}>
              <TransactionIcon className={classes.icon} />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Total Transaction
            </Typography>
            <Typography
              className={classes.moneyText}
              variant="h3"
            >
              Rp. 1,740,000,000
            </Typography>
            <div className={classes.difference}>
              <ArrowDropDownIcon className={classes.differenceIcon} />
              <Typography
                className={classes.differenceValue}
                variant="body2"
              >
                12%
              </Typography>
              <Typography
                className={classes.caption}
                variant="caption"
              >
                Since last month
              </Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Budget.propTypes = {
  className: PropTypes.string
};

export default Budget;
