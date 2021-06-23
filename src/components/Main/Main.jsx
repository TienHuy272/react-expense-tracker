import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title='Expense Tracker'
        subheader='Powered by Speechly'
      ></CardHeader>
      <CardContent>
        <Typography align='center' variant='h5'>
          Total balance $100
        </Typography>
        <Typography
          style={{ lineHeight: '1.5em', marginTop: '20px' }}
          variant='subtitle1'
        >
          test...
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
