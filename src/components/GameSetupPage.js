import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';
import CharacterSelect from './CharacterSelect';
import AreaSelect from './AreaSelect';

class GameSetupPage extends Component {
  state = {
    showCharacterSelect: true,
    character: null,
    area: null,
  };

  handleCharacterSelect = character => {
    this.setState(() => ({ character: Number(character) }));

    this.toggleShowCharacterSelect();
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

export default GameSetupPage;
