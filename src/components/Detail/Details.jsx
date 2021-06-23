import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';

const Details = ({ title }) => {
  const classes = useStyles();
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title}></CardHeader>
      <CardContent>
        <Typography>$50</Typography>
      </CardContent>
    </Card>
  );
};

export default Details;
