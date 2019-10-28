import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const LandingPage = () => (
  <div>
    <h1>Math Monsters</h1>
    <Link to={routes.DASHBOARD} data-testid="log-in-link">
      Log In
    </Link>
  </div>
);
export default LandingPage;
