import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    const array = this.createNewQuestion();
    this.state = {
      value1: array[0],
      value2: array[1],
      value3: array[2],
      proposedAnswer: array[3],
    }
  }

  createNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer]
  };

  handleAnswer = (event) => {
    // update question
    const newArray = this.createNewQuestion();
    this.setNewQuestion(newArray);
    
    const answerWasGood = this.evaluateAnswer(event.target.name);
    this.props.handleUserAnswer(answerWasGood);
  };

  setNewQuestion = (newArray) => {
    this.setState((currentState) => ({
      value1: newArray[0],
      value2: newArray[1],
      value3: newArray[2],
      proposedAnswer: newArray[3],
    }));
  };

  evaluateAnswer = (userAnswer) => {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const correctAnswer = value1 + value2 + value3;
    
    return (
      (proposedAnswer === correctAnswer && userAnswer === 'true') ||
      (proposedAnswer !== correctAnswer && userAnswer === 'false')
    );
  };
  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
  	return (
    <div>
      <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
	  </div>
      <button onClick={this.handleAnswer} name="true">True</button>
      <button onClick={this.handleAnswer} name="false">False</button>
	</div>
    )
  }
}

export default Game;