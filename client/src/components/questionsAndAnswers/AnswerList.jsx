import React, { useState } from 'react';
import Answer from './Answer.jsx';
import './QandA.css';

function AnswerList({ answers }) {

  const [isExpanded, setIsExpanded] = useState(false);

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

  const displayedAnswers = isExpanded? sortedAnswers : sortedAnswers.slice(0, 2);

  const toggleExpansion =() => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div>
      <div className = {isExpanded? 'answersExpanded':''}>
        {displayedAnswers.map((answer) => (
          <Answer key={answer.answer_id} answer={answer} />
        ))}
      </div>
      {sortedAnswers.length > 2  && (
        <button onClick={toggleExpansion} className='toggleAnswers'>{isExpanded? 'Collapse answers' : 'See more answers' }</button>
      )}
    </div>
  );
}

export default AnswerList;
