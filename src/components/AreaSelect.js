import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AREAS from '../constants/areas';
import OptionCard from './reusableComponents/OptionCard';

class AreaSelect extends Component {
  handleAreaSelect = e => {
    const { value } = e.target;

    this.props.handleAreaSelect(value);
  };
  render() {
    return (
      <div data-testid="area-select">
        <h3>Choose an Area</h3>
        <div>
          {AREAS.map(area => (
            <OptionCard
              {...area}
              handleSelect={this.handleAreaSelect}
              key={area.id}
            />
          ))}
        </div>
        <button onClick={this.props.onCancel}>Go Back</button>
      </div>
    );
  }
}

AreaSelect.propTypes = {
  handleAreaSelect: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AreaSelect;
