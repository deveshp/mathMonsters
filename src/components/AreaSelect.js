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
          {AREAS.map(area => {
            const completedCheck = () => {
              if (area.operation === 'addition' && this.props.completedAreas.additionAreaComplete) {
                return true;
              } if (area.operation === 'subtraction' && this.props.completedAreas.subtractionAreaComplete) {
                return true;
              } if (area.operation === 'multiplication' && this.props.completedAreas.multiplicationAreaComplete) {
                return true;
              } else if (area.operation === 'division' && this.props.completedAreas.divisionAreaComplete) {
                return true;
              } else {
                return false;
              }
            }
            return (
              <OptionCard
                {...area}
                handleSelect={this.handleAreaSelect}
                key={area.id}
                completed={completedCheck()}
              />
            )
          })}
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
