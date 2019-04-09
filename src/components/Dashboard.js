import React from 'react';
import char0 from '../images/char0.jpg';
import char1 from '../images/char1.jpg';
import { setCharacter } from '../actions/gameStateActions';
import { connect } from 'react-redux';

const Dashboard = props => {
  const selectCharacter = input => {
    props.dispatch(setCharacter(input));
    props.history.push('/gamesetup');
  };
  return (
    <div>
      <p>This is the Dashboard page</p>
      <img
        onClick={() => selectCharacter(0)}
        src={char0}
        alt="Female Character"
        width={200}
      />
      <img
        onClick={() => selectCharacter(1)}
        src={char1}
        alt="Male Character"
        width={200}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Dashboard);
