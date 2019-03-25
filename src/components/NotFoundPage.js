import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>404 Error</p>
    <p>Page Not Found</p>
    <Link to="/">Go to Landing Page</Link>
  </div>
);
export default NotFoundPage;
