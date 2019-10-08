import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/gamePage.css';
import { operation } from '../../constants/operations.js';

import AREAS from '../../constants/areas';
//import CHARACTERS from '../constants/characters';
import { updateAreaComplete } from '../../actions/achievementsActions';

import { backgroundSelect, charSelect, monsterSelect } from '../../constants/picSelect';
import StoryCard from '../reusableComponents/StoryCard';

import GamePageCharacter from './GamePageCharacter';
import GameHUD from './GameHUD';

// This imports all character and monster pics. I copied this from stack_overflow. But then I read about it here and made sure I understood it: https://webpack.js.org/guides/dependency-management/
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: AREAS.find(ar => ar.id === this.props.location.state.area),
      math: {
        ...operation(this.props.location.state.area),
        userInput: ''
      },
      difficulty: 'easy',
      attempted: false,
      correct: 0,
      incorrect: 0,
      toggle: false,
      CSStimeState: 'before', // 'during', 'reset'
      started: false,
      initialWidthForCharsMovement: document.documentElement.clientWidth,
      showStory: true,
      levelForStory: 1
    }
    this.componentWillUnmount= () => {
      clearTimeout(this.timeOutCount);
    }
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

  textInputChange = (event) => {
    event.persist();
    event.preventDefault();
    this.setState(() => ({
      math: {
        ...this.state.math,
        userInput: event.target.value
      }
    }))
  }

  clearSetTimeout = () => {
    clearTimeout(this.timeOutCount);
    this.timeOutCount = setTimeout(() => this.setState(() => ({
      attempted: true,
      incorrect: this.state.attempted === false ? this.state.incorrect + 1: this.state.incorrect
    })), this.state.math.seconds * 1000);
  }

  submitAnswer = (event) => {
    event.preventDefault();
    if (Number(this.state.math.userInput) === this.state.math.correctResult || this.state.math.userInput === 'k' /* Note: This is to help developers cheat. */) {
      this.clearSetTimeout();
      this.setState(() => ({
        CSStimeState: this.state.started === false ? 'during' : 'reset',
        math: {
          ...operation(this.props.location.state.area, this.state.difficulty),
          userInput: '',
        },
        started: this.state.started === false && true,
        correct: this.state.attempted === false ? this.state.correct + 1 : this.state.correct,
        attempted: false
      }))
    } else {
      this.setState(() => ({
        attempted: true,
        incorrect: this.state.attempted === false ? this.state.incorrect + 1 : this.state.incorrect,
        math: {
          ...this.state.math,
          userInput: '',
        }
      }))
    }

    // Win and lose conditions
    if (this.state.incorrect === this.state.math.hitPoints - 1) { // Note: The -1 may seem confusing here, but is necessary because of how React batches setState calls. Change it and see what I mean. Same for below. 
      alert('Try again!');
      this.setState(() => ({
        correct: 0,
        incorrect: 0
      }))
    } else if (this.state.correct === this.state.math.numberOfQuestions - 1) {
      if (this.state.difficulty === 'easy') {
        this.setState(() => ({
          difficulty: 'medium',
          attempted: false,
          correct: 0,
          incorrect: 0,
          showStory: true,
          CSStimeState: 'before',
          levelForStory: 2,
          math: {
            ...operation(this.props.location.state.area, 'medium'),
            userInput: ''
          }
        }))
        this.clearSetTimeout();
      } else if (this.state.difficulty === 'medium') {
        this.setState(() => ({
          difficulty: 'hard',
          attempted: false,
          correct: 0,
          incorrect: 0,
          showStory: true,
          CSStimeState: 'before',
          levelForStory: 3,
          math: {
            ...operation(this.props.location.state.area, 'hard'),
            userInput: ''
          }
        }))
        this.clearSetTimeout();
      } else {
        this.setState(() => ({
          levelForStory: 4,
          showStory: true,
          CSStimeState: 'before'
        }))
      }
    }
  }

  storyDone = () => {
    this.setState(() => ({ showStory: false }))
    if (this.state.levelForStory === 4) {
      this.endLevel();
    }
  }

  endLevel = () => {
    this.areaComplete(this.state.area.id);
  }

  render() {
    return (
      <div className='mainGamePage' style={{
        backgroundImage: `url(${images[backgroundSelect(this.state.area.id)]})`
      }}>
        {this.state.showStory && <StoryCard areaInput={this.state.area.id} levelInput={this.state.levelForStory} whenDone={this.storyDone} />}
        <h2>{this.state.area.name}</h2>
        <h4>{this.state.area.operation}</h4>
        <GamePageCharacter 
          imageSource={images[monsterSelect(this.state.area.id, this.state.difficulty)]}
          type='Monster'
          steps={this.state.incorrect}
          total={this.state.math.hitPoints}
          charMovementWidth={this.state.initialWidthForCharsMovement}
          area={this.state.area.id}
          difficulty={this.state.difficulty}
        />
        <GamePageCharacter 
          imageSource={images[charSelect(this.props.gameState.character)]}
          type='Character'
          steps={this.state.correct}
          total={this.state.math.numberOfQuestions}
          charMovementWidth={this.state.initialWidthForCharsMovement}
          area={this.state.area.id}
          difficulty={this.state.difficulty}
        />
        <p></p>
        <GameHUD
          questionText={this.state.math.questionText}
          submit={this.submitAnswer}
          inputValue={this.state.math.userInput}
          change={this.textInputChange}
          seconds={this.state.math.seconds}
          correct={this.state.correct}
          numberOfQuestions={this.state.math.numberOfQuestions}
          incorrect={this.state.incorrect}
          hitPoints={this.state.math.hitPoints}
          difficulty={this.state.difficulty}
          CSStimeState={this.state.CSStimeState}
          />
        {<button onClick={() => {this.props.history.push('/game_setup')}}>Go back</button>}
        {<button onClick={this.endLevel}>Area complete: Dev only</button>}
      </div>
    );
  };
};

GamePage.propTypes = {
  location: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(GamePage);
