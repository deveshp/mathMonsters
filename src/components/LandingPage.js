import React from 'react';
import { Link } from 'react-router-dom';
const LandingPage = () => (
  <div>
    <h1>Math Monsters</h1>
    <Link to="/dashboard">
      <button>LOGIN</button>
    </Link>
  </div>
);
export default LandingPage;