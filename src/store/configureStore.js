import achievementsReducer from '../reducers/achievementsReducer';
import { createStore, combineReducers } from 'redux';
import gameStateReducer from '../reducers/gameStateReducer';

export default () => {
  const store = createStore(
    combineReducers({
      achievements: achievementsReducer,
      gameState: gameStateReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
