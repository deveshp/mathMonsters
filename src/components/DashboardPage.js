import React from 'react';

import * as routes from '../constants/routes';

const DashboardPage = () => (
  <div>
    <h2>My World</h2>
    <h3>Achievements</h3>
    <a href={routes.GAME_SETUP}>Start a new game</a>
  </div>
);

export default DashboardPage;
