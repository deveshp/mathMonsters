import React, { Component } from 'react';

import AREAS from '../constants/areas';
import OptionCard from './OptionCard';

class AreaSelect extends Component {
  handleAreaSelect = e => {
    const { value } = e.target;

    this.props.handleAreaSelect(value);
  };
  render() {
    return (
      <div>
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

export default AreaSelect;
