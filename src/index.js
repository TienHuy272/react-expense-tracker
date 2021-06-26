import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import './index.css';
import { Provider } from './context/context';

ReactDOM.render(
  <SpeechProvider appId='5066251b-7e07-40a0-ae91-d8ed5f60e627' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);
