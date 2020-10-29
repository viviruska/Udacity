import React from 'react';

/*
This can be a Stateless Functional Component because this component just renders
the props that are passed to it.
*/
const Score = (props) => {
  return (
    <p className="text">
      Your Score: {props.numGoodAnswers}/{props.numQuestions}
    </p>
  )
};

export default Score;