import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/gamePage.css';
import { operation } from '../constants/operations.js';

import AREAS from '../constants/areas';
//import CHARACTERS from '../constants/characters';
import { updateAreaComplete } from '../actions/achievementsActions';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: AREAS.find(ar => ar.id === this.props.location.state.area),
      math: {
        ...operation(this.props.location.state.area),
        userInput: ''
      },
      attempted: false,
      correct: 0,
      incorrect: 0,
      toggle: false,
      CSStimeState: 'before', // 'during', 'reset'
      started: false,
      initialWidthForCharsMovement: document.documentElement.clientWidth
    }
    this.textInputChange = this.textInputChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.timeoutBarCSS = this.timeoutBarCSS.bind(this);
    this.areaComplete = this.areaComplete.bind(this);
    this.monsterMovementCSS = this.monsterMovementCSS.bind(this);
  }

  areaComplete = (area) => {
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

  textInputChange(event) {
    event.persist();
    event.preventDefault();
    this.setState(() => ({
      math: {
        ...this.state.math,
        userInput: event.target.value
      }
    }))
  }

  monsterMovementCSS() {
    return {
      style: {marginLeft: this.state.incorrect / this.state.math.hitPoints * (this.state.initialWidthForCharsMovement - 150)},
      className: 'monsterPicDiv'
    }
  }

  characterMovementCSS() {
    return {
      style: {marginLeft: this.state.correct / this.state.math.numberOfQuestions * (this.state.initialWidthForCharsMovement - 150)},
      className: 'characterPicDiv'
    }
  }

  timeoutBarCSS() {
    if (this.state.CSStimeState === 'before') {
      return {
        style: {height: 120},
        className: `timeOutBar`
      }
    } else if (this.state.CSStimeState === 'during') {
      return {
        style: {animationName: 'boxHeight', animationDuration: `${this.state.math.seconds}s`},
        className: `timeOutBar `
      }
    } else if (this.state.CSStimeState === 'reset') {
      return {
        className: `timeOutBar`,
        style: {animationName: 'boxHeightTwo', animationDuration: `${this.state.math.seconds}s`}
      }
    }
  }

  async submitAnswer (event) {
    event.preventDefault();
    if (Number(this.state.math.userInput) === this.state.math.correctResult) {
      await this.setState(() => ({
        CSStimeState: this.state.started === false ? 'during' : 'reset',
        math: {
          ...operation(this.props.location.state.area),
          userInput: '',
        },
        started: this.state.started === false && true,
        correct: this.state.attempted === false ? this.state.correct + 1 : this.state.correct,
        attempted: false
      }))
    } else {
      await this.setState(() => ({
        attempted: true,
        incorrect: this.state.attempted === false ? this.state.incorrect + 1 : this.state.incorrect,
        // started: this.state.started === false && true,
        // CSStimeState: this.state.started === false ? 'during' : 'reset',
        math: {
          ...this.state.math,
          userInput: '',
        }
      }))
    }

    // Win and lose conditions
    if (this.state.incorrect === this.state.math.hitPoints) {
      this.props.history.push('/game_setup');
    } else if (this.state.correct === this.state.math.numberOfQuestions) {
      this.areaComplete(this.state.area.id);
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h2>{this.state.area.name}</h2>
        <h4>{this.state.area.operation}</h4>
        {/*<p>You are {character.name}.</p>*/}
        <div {...this.monsterMovementCSS()}></div>
        <div {...this.characterMovementCSS()}></div>
        <p></p>
        <div id='mathBox'>
        <p id='questionText'>{this.state.math.questionText}</p>
        <p>{this.state.math.seconds} seconds </p>
        <p>correct: {this.state.correct} / {this.state.math.numberOfQuestions}</p>
        <p>incorrect: {this.state.incorrect} / {this.state.math.hitPoints}</p>
        <form onSubmit={this.submitAnswer}>
          <input type='text' value={this.state.math.userInput} onChange={this.textInputChange} />
          <button type='submit' value='submit'>submit</button>
        </form>
          <div id="timeOutBorder">
          <div {...this.timeoutBarCSS()} onClick={() => this.setState({toggle: !this.state.toggle})}></div>
          </div>
          {<button onClick={() => {this.areaComplete(this.state.area.id)}}>Complete Area</button>}
        </div>
        
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
