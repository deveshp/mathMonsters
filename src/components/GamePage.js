import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AREAS from '../constants/areas';
import CHARACTERS from '../constants/characters';
import { updateAreaComplete } from '../actions/achievementsActions';

const GamePage = (props) => {
  console.log(props);
  const state = props.location.state;
  const character = CHARACTERS.find(char => char.id === state.character);
  const area = AREAS.find(ar => ar.id === state.area);
  const areaComplete = ({ area }) => {
    if (area === 1 ) {
      props.dispatch(updateAreaComplete('addition', true));
    } else if (area === 2) {
      props.dispatch(updateAreaComplete('subtraction', true));
    } else if (area === 3) {
      props.dispatch(updateAreaComplete('multiplication', true));
    } else if (area === 4) {
      props.dispatch(updateAreaComplete('division', true));
    }
    props.history.push('/game_setup');

  };

  return (
    <div>
      <h2>{area.name}</h2>
      <p>You are {character.name}.</p>
      <button onClick={() => {areaComplete(state)}}>Complete Area</button>
    </div>
  );
};

GamePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default connect()(GamePage);
