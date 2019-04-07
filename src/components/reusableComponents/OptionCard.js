import React from 'react';
import PropTypes from 'prop-types';

const OptionCard = ({ description, id, name, handleSelect }) => (
  <div>
    <div>
      <h4>{name}</h4>
      <div>
        <p>{description}</p>
      </div>
      <button onClick={handleSelect} value={id}>
        Select
      </button>
    </div>
  </div>
);

OptionCard.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default OptionCard;
