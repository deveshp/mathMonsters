import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// I assume we won't need these for production, so I will put them here for removal later.
import {
  additionComplete,
  subtractionComplete,
  multiplicationComplete,
  divisionComplete,
} from './actions/achievementsActions';
import { characterChoice } from './actions/gameStateActions';

const store = configureStore();

store.subscribe(() => {
  // console.log(store.getState());
});

store.dispatch(additionComplete(true));
store.dispatch(additionComplete(false));
store.dispatch(subtractionComplete(true));
store.dispatch(multiplicationComplete(true));
store.dispatch(divisionComplete(true));
store.dispatch(characterChoice(1));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
