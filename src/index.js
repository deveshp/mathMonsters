import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// I assume we won't need these for production, so I will put them here for removal later.
// import { updateAreaComplete } from './actions/achievementsActions';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());

// store.dispatch(updateAreaComplete('addition', true));
// store.dispatch(updateAreaComplete('subtraction', true));
// store.dispatch(updateAreaComplete('multiplication', true));
// store.dispatch(updateAreaComplete('division', true));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
