import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from 'react-testing-library';

import * as routes from './constants/routes';

import App from './App';
import GameSetupPage from './components/GameSetupPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

function renderWithRouter(
  ui,
  {
    route = routes.LANDING,
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

test('app renders including navigation', () => {
  const { getByTestId } = renderWithRouter(<App />);
  expect(getByTestId('log-in-link')).toBeInTheDocument();
  fireEvent.click(getByTestId('log-in-link'));
  expect(getByTestId('dashboard-title')).toBeInTheDocument();
});

test('landing on a bad page shows 404 page', () => {
  const { getByTestId } = renderWithRouter(<App />, {
    route: '/nomatch',
  });
  expect(getByTestId('page-not-found-error')).toBeInTheDocument();
});

test('game setup page shows correct info and loads area select on selecting character', () => {
  const { getByTestId, getByText } = renderWithRouter(<GameSetupPage />);
  expect(getByTestId('character-select')).toBeInTheDocument();

  fireEvent.click(getByText('Select'));
  expect(getByTestId('area-select')).toBeInTheDocument();

  fireEvent.click(getByText('Select'));
  expect(getByTestId('start-game-link')).toBeInTheDocument();
});

/* 
  test:
    character info shows up correctly
    area info shows up correctly
    correct character and area passed to game page
*/
