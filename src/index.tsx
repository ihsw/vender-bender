import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { vendors } from './reducers';
import { StoreState } from './types';
import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';

const preloadedState: StoreState = {};
const store = createStore<StoreState>(vendors, preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
