import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as routes from '../constants/routes';
import CHARACTERS from '../constants/characters';
import OptionCard from './reusableComponents/OptionCard';

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
      <div data-testid="character-select">
        <h3>Choose Your Character</h3>
        <div>
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

CharacterSelect.propTypes = {
  handleCharacterSelect: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect()(withRouter(CharacterSelect));
