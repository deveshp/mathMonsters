import React from 'react';
import '../../styles/gamePageCharacter.css';

const GamePageCharacter = (props) => {
    const movementCSS = () => {
        return {
          style: {marginLeft: props.steps / props.total * (props.charMovementWidth - 150)},
          className: 'char'
        }
      }
    return (
        <div {...movementCSS()}>
            <img alt={props.type} src={props.imageSource} style={{height: 140}}/>
        </div>
        )
}

export default GamePageCharacter;