import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { vendors } from './reducers';
import { StoreState } from './types';
import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';

const preloadedState: StoreState = {
  productItems: [
    {
      item: {code: 'A1', name: 'Chips', price: 1.99},
      isNew: true,
      quantity: 7
    },
    {
      item: {code: 'A2', name: 'Cookies', price: 0.99},
      isNew: true,
      isPopular: true,
      quantity: 4
    },
    {
      item: {code: 'A3', name: '3 Avocados', price: 0.49},
      quantity: 10,
      isOnSale: true
    },
    {
      item: {code: 'A4', name: 'Stale Crackers', price: 0.39},
      quantity: 20
    }
  ]
};
const store = createStore<StoreState>(vendors, preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
