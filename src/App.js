import React from 'react';
import Details from './components/Detail/Details';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import Main from './components/Main/Main';
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from '@speechly/react-ui';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        className={classes.grid}
        spacing={0}
        alignItems='center'
        justify='center'
        style={{ height: '100vh' }}
      >
        <Grid item xs={12} sm={4}>
          <Details title='Income'></Details>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main></Main>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title='Expense'></Details>
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
