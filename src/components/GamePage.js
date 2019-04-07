import React from 'react';
import PropTypes from 'prop-types';

import AREAS from '../constants/areas';
import CHARACTERS from '../constants/characters';

const GamePage = ({ location: { state } }) => {
  const character = CHARACTERS.find(char => char.id === state.character);
  const area = AREAS.find(ar => ar.id === state.area);
  return (
    <div>
      <h2>{area.name}</h2>
      <p>You are {character.name}.</p>
    </div>
  );
};

GamePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default GamePage;
