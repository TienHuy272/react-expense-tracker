import React, { useRef, useEffect } from 'react';
import Details from './components/Detail/Details';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import Main from './components/Main/Main';
import { SpeechState, useSpeechContext } from '@speechly/react-client';
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from '@speechly/react-ui';

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => {
    main.current.scrollIntoView();
  };

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

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
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title='Income'></Details>
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main></Main>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title='Income'></Details>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title='Expense' className={classes.last}></Details>
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
