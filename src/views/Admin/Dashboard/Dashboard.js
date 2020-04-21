import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TodayIcon from '@material-ui/icons/Today';
import SearchInput from '../../../components/SearchInput';

import {
  TotalDeposit,
  TotalBalance,
  TotalTransaction,
  TopAbsorptionMerchant,
  TransactionAndVerification,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  button: {
    marginTop: theme.spacing(6),
    textTransform: 'none'
  },
  icon: { color: theme.palette.text.light },
  dasboardText: {
    color: theme.palette.text.dark,
    fontWeight: 'Bold',
    marginTop: theme.spacing(2)
  },
  searchInput: {
    width: 300,
    height: 40
    // display:'lock'
    // marginLeft:100,
  },
  row: {
    height: '42px',
    display: 'flex',
    alignContent: 'stretch',
    marginTop: theme.spacing(1),
    marginBottom: 40,
    float: 'right'
  }
  // rowLeft: {
  //   backgroundColor:'red',
  //   height: '42px',
  //   display: 'block',
  //   alignContent: 'stretch',
  //   marginTop: theme.spacing(1),
  //   marginBottom: 40,
  //   float: 'left'
  // }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={6}
        >
          <Typography variant="h2">Dashboard</Typography>
          <Typography variant="h6">Dashboard</Typography>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
          >
            <AddIcon className={classes.icon} />
            <Typography>Add Widget</Typography>
          </Button>
          <Typography
            className={classes.dasboardText}
            variant="h6"
          >
            TOTAL ABSORPTION
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={6}
        >
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
          >
            <div className={classes.row}>
              <SearchInput
                className={classes.searchInput}
                placeholder="Type Here.."
              />
            </div>
          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
          />
        </Grid>

        <Grid
          item
          lg={4}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalDeposit />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalTransaction />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalBalance />
        </Grid>
        <Grid
          item
          lg={7}
          md={12}
          xl={9}
          xs={12}
        >
          <TransactionAndVerification />
        </Grid>
        <Grid
          item
          lg={5}
          md={6}
          xl={3}
          xs={12}
        >
          <TopAbsorptionMerchant />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
