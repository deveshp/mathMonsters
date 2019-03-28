import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import * as routes from '../constants/routes';
import CharacterSelect from './CharacterSelect';
import AreaSelect from './AreaSelect';

class GameSetupPage extends Component {
  state = {
    showCharacterSelect: true,
    character: null,
    area: '',
  };

  handleCharacterSelect = character => {
    this.setState(() => ({ character }));

    this.toggleShowCharacterSelect();
  };

  handleAreaSelect = area => {
    this.setState(() => ({ area }));

    this.props.history.push(routes.GAME);
  };

  toggleShowCharacterSelect = () => {
    this.setState(prevState => ({
      showCharacterSelect: !prevState.showCharacterSelect,
    }));
  };

  render() {
    return (
      <div>
        <h2>New Game</h2>
        {this.state.showCharacterSelect ? (
          <CharacterSelect handleCharacterSelect={this.handleCharacterSelect} />
        ) : (
          <AreaSelect
            handleAreaSelect={this.handleAreaSelect}
            onCancel={this.toggleShowCharacterSelect}
          />
        )}
      </div>
    );
  }
}

export default withRouter(GameSetupPage);
