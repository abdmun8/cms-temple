import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { options } from './chart';
// api
import { getTrxAndVerify } from 'utils/dashoard-admin';

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 10
  },
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestSales = props => {
  const { className, ...rest } = props;
  const [chartData, setChartData] = useState({});
  // useEffect(() => {
  //   const getData = async () => {
  //     const resp = await getTrxAndVerify();
  //     if (resp.status == 200 && resp.data) {
  //       let labels = [];
  //       let trx = [];
  //       let ver = [];
  //       resp.data.map(item => {
  //         labels.push(item.MERCHANT_NAME);
  //         trx.push(parseInt(item.REDEEM));
  //         ver.push(parseInt(item.VERIVIED));
  //       });
  //       setChartData({
  //         labels: labels,
  //         datasets: [
  //           { label: 'Transaction', backgroundColor: '#BB010A', data: trx },
  //           { label: 'Verification', backgroundColor: '#5A7CAA', data: ver }
  //         ]
  //       });
  //     }
  //   };
  //   getData();
  // }, []);

  const classes = useStyles();
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Transaction And Verification"
      />
      <CardContent>
        <div className={classes.chartContainer}>
          {chartData && <Bar
            data={chartData}
            options={options}/>}
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          size="small"
          variant="text"
        >
          Advance View <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;
