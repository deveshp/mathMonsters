import React from 'react';
import story from '../../constants/story.json';
import '../../styles/StoryCard.css';

class StoryCard extends React.Component {
    state = {
        storyText: this.props.input ? story[this.props.input] : story[this.props.areaInput][this.props.levelInput],
        currentText: 0
    };
    buttonClick = () => {
        if (this.state.currentText < this.state.storyText.length - 1) {
            this.setState(() => ({
                currentText: this.state.currentText + 1
            }))
        } else {
            this.props.whenDone();
        }
    }
    render() {
        return (<div className='StoryCard'>
            {<p>{this.state.storyText[this.state.currentText]}</p>}
            <button onClick={this.buttonClick}>Next!</button>
        </div>)
    }
    
    
}

export default StoryCard;