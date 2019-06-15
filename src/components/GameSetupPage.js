import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCharacter } from '../actions/gameStateActions.js';

import * as routes from '../constants/routes';
import CharacterSelect from './CharacterSelect';
import AreaSelect from './AreaSelect';

class GameSetupPage extends Component {
  state = {
    showCharacterSelect: this.props.gameState.character !== undefined ? false : true,
    character: this.props.gameState.character === undefined ? null : this.props.gameState.character,
    area: null,
  };

  handleCharacterSelect = character => {
    this.setState(() => ({ character: Number(character) }));
    this.toggleShowCharacterSelect();
    this.props.dispatch(setCharacter(Number(character)));
  };

  handleAreaSelect = area => {
    this.setState(() => ({ area: Number(area) }));
  };

  toggleShowCharacterSelect = () => {
    this.setState(prevState => ({
      showCharacterSelect: !prevState.showCharacterSelect,
    }));
  };

  render() {
    return (
      <div>
        <h2 data-testid="gameSetupTitle">New Game</h2>
        {this.state.showCharacterSelect ? (
          <CharacterSelect handleCharacterSelect={this.handleCharacterSelect} />
        ) : (
          <AreaSelect
            handleAreaSelect={this.handleAreaSelect}
            onCancel={this.toggleShowCharacterSelect}
          />
        )}
        {this.state.character && this.state.area && (
          <Link
            to={{
              pathname: routes.GAME,
              state: {
                area: this.state.area,
                character: this.state.character,
              },
            }}
            data-testid="start-game-link"
          >
            Start Game
          </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...state
  }
} 

export default connect(mapStateToProps)(GameSetupPage);
