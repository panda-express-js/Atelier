import React from 'react';
import Answer from './Answer.jsx';

function AnswerList({ answers }) {

  const sortedAnswers = Array.isArray(answers) ? [...answers].sort((a, b) => {
    const isASeller = a.answerer_name.toLowerCase() === 'seller';
    const isBSeller = b.answerer_name.toLowerCase() === 'seller';

    if (isASeller && !isBSeller) {
      return -1;
    }
    if (!isASeller && isBSeller) {
      return 1;
    }
    if (isASeller && isBSeller) {
      // If both are 'seller', then sort by helpfulness
      return b.helpfulness - a.helpfulness;
    }
    return b.helpfulness - a.helpfulness;
  }) : [];

  return (
    <div>
      {sortedAnswers.map((answer) => (
        <Answer key={answer.answer_id} answer={answer} />
      ))}
    </div>
  );
}

export default AnswerList;
