import React from 'react';
import { connect } from 'react-redux';
import { additionComplete } from '../actions/achievementsActions';

/* Once again, this file is full of code which serves no purpose other than to demonstrate that the store
is linked up and working. If you click on the bold text, then the redux store is changed for the addition world
to be complete and the change is visible in the browser. Whether you are Emma, Regina or Dev, please delete
all non-applicable code when converting this component into what it is supposed to be.*/

const GameSetupPage = props => {
  const onClick = () => {
    props.dispatch(additionComplete(true));
  };
  console.log(props);
  return (
    <div>
      {props.achievements.additionWorldComplete && (
        <p>You have completed the addition world.</p>
      )}
      {props.achievements.subtractionWorldComplete && (
        <p>You have completed the subtraction world.</p>
      )}
      {props.achievements.multiplicationWorldComplete && (
        <p>You have completed the multiplication world.</p>
      )}
      {props.achievements.divisionWorldComplete && (
        <p onClick={onClick}>
          <b>You have completed the division world</b>.
        </p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    achievements: state.achievements,
  };
};

export default connect(mapStateToProps)(GameSetupPage);
