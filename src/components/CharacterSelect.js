import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import * as routes from '../constants/routes';
import CHARACTERS from '../constants/characters';
import OptionCard from './OptionCard';

class CharacterSelect extends Component {
  handleCharacterSelect = e => {
    const { value } = e.target;

    this.props.handleCharacterSelect(value);
  };
  onExit = () => {
    this.props.history.push(routes.LANDING);
  };

  render() {
    return (
      <div className="flex-col-center">
        <h3>Choose Your Character</h3>
        <div className="flex-center">
          {CHARACTERS.map(character => (
            <OptionCard
              {...character}
              handleSelect={this.handleCharacterSelect}
              key={character.id}
            />
          ))}
        </div>
        <div>
          <button onClick={this.onExit}>Return to Main Page</button>
        </div>
      </div>
    );
  }
}

export default withRouter(CharacterSelect);
