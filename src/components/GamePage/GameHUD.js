import React from 'react';

export const GameHUD = (props) => {
    const timeoutBarCSS = () => {
        if (props.CSStimeState === 'before') {
          return {
            style: {height: 120},
            className: `timeOutBar`
          }
        } else if (props.CSStimeState === 'during') {
          return {
            style: {animationName: 'boxHeight', animationDuration: `${props.seconds}s`},
            className: `timeOutBar `
          }
        } else if (props.CSStimeState === 'reset') {
          return {
            className: `timeOutBar`,
            style: {animationName: 'boxHeightTwo', animationDuration: `${props.seconds}s`}
          }
        }
      }
    return (
        <div id='mathBox'>
            <p id='questionText'>{props.questionText}</p>
            <div id="timeOutBorder">
            <div {...timeoutBarCSS()}></div>
            </div>
            <form onSubmit={props.submit}>
            <input type='text' value={props.inputValue} onChange={props.change}/>
            <button type='submit' value='submit'>Submit</button>
            </form>
            <p>{props.seconds} seconds </p>

            <p>correct: {props.correct} / {props.numberOfQuestions}</p>
            <p>incorrect: {props.incorrect} / {props.hitPoints}</p>
            <p>level: {props.difficulty}</p>
        </div>
    )
};

export default GameHUD;