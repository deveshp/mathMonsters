import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const NotFoundPage = () => (
  <div>
    <p data-testid="page-not-found-error">404 Error</p>
    <p>Page Not Found</p>
    <Link to={routes.LANDING}>Go to Landing Page</Link>
  </div>
);
export default NotFoundPage;
