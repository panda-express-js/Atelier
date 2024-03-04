import React from 'react';
import Answer from './Answer.jsx';

function AnswerList({ answers }) {

  if (!answers ) {
    return <div>No answers yet</div>;
  }

  return (
    <div>
      {answers.map((answer) => (
        <Answer key={answer.answer_id} answer={answer} />
      ))}
    </div>
  );
}

export default AnswerList;
