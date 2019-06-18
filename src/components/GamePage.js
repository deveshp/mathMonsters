import React, { Component, setState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/gamePage.css';
import { additionFunction } from '../constants/operations.js';

import AREAS from '../constants/areas';
//import CHARACTERS from '../constants/characters';
import { updateAreaComplete } from '../actions/achievementsActions';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: AREAS.find(ar => ar.id === this.props.location.state.area),
      math: {
        ...additionFunction(),
        userInput: ''
      }
    }
    this.textInputChange = this.textInputChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  textInputChange(event) {
    event.persist();
    event.preventDefault();
    console.log(event.target.value);
    this.setState(() => ({
      math: {
        ...this.state.math,
        userInput: event.target.value
      }
    }))
  }

  submitAnswer(event) {
    event.preventDefault();
    if (Number(this.state.math.userInput) === this.state.math.correctResult) {
      this.setState(() => ({
        math: {
          ...additionFunction(),
          userInput: ''
        }
      }))
      // document.getElementById("answerInput").addEventListener("keyup", function(event) {
      //   event.preventDefault();
      //   if (event.keyCode == 13) {
      //       console.log('something');
      //   }})
    } else {
      console.log('incorrect');
    }
  }
  render() {
    console.log('state', this.state);
    const areaComplete = (area) => {
      if (area === 1 ) {
        this.props.dispatch(updateAreaComplete('addition', true));
      } else if (area === 2) {
        this.props.dispatch(updateAreaComplete('subtraction', true));
      } else if (area === 3) {
        this.props.dispatch(updateAreaComplete('multiplication', true));
      } else if (area === 4) {
        this.props.dispatch(updateAreaComplete('division', true));
      }
      this.props.history.push('/game_setup');
    };

    return (
      <div>
        <h2>{this.state.area.name}</h2>
        <h4>{this.state.area.operation}</h4>
        {/*<p>You are {character.name}.</p>*/}
        <div id='monsterPicDiv'></div>
        <p></p>
        <div id='characterPicDiv'></div>
        <p></p>
        <div id='mathBox'>
        <p id='questionText'>{this.state.math.questionText}</p>
        <form onSubmit={this.submitAnswer}>
          <input type='text' value={this.state.math.userInput} onChange={this.textInputChange} />
          <button type='submit' value='submit'>submit</button>
        </form>
          <div id="timeOutBorder">
          <div id="timeOutBar"></div>
          </div>
        </div>
        {<button onClick={() => {areaComplete(this.state.area.id)}}>Complete Area</button>}
      </div>
    );
  };
};

GamePage.propTypes = {
  location: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(GamePage);
