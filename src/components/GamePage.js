import React from 'react';

const GamePage = ({ location: { state } }) => (
  <div>
    <h2>This is the game page</h2>
    <p>My character is {state.character}</p>
    <p>This is area {state.area}</p>
  </div>
);

export default GamePage;
