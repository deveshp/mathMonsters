import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/OptionCard.css';

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

const OptionCard = ({ description, id, name, handleSelect, completed, image }) => {
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <div className='box'>
          {/* <p>{description}</p> */}
          <img alt={description} src={images[image]} className='selectPics'></img>
          {completed === true && <p>COMPLETE!</p>}
        </div>
        <button onClick={handleSelect} value={id}>
          Select
        </button>
      </div>
    </div>
  )
};

OptionCard.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default OptionCard;
