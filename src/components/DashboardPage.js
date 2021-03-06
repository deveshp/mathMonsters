import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
// import { connect } from 'tls';

const DashboardPage = (props) => {
  return (
    <div>
      <h2 data-testid="dashboard-title">My World</h2>
      <h3>Achievements</h3>
        {props.achievements.additionAreaComplete && <p>Addition Area Complete</p>}
        {props.achievements.subtractionAreaComplete && <p>Subtraction Area Complete</p>}
        {props.achievements.multiplicationAreaComplete && <p>Multiplication Area Complete</p>}
        {props.achievements.divisionAreaComplete && <p>Division Area Complete</p>}
      <Link to={routes.GAME_SETUP} data-testid="new-game-link">
        Start a new game
      </Link>
    </div>
  )
};

const mapStateToProps = (state) => {
  // Ruan, you need to still wire this up better.
  return {
    character: state.character,
    achievements: state.achievements
  };
};

export default connect(mapStateToProps)(DashboardPage);
