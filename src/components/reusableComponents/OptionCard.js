import React from 'react';

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

export default OptionCard;
