import React, { useState}  from 'react';
import AnswerList from './AnswerList.jsx';


function Question({question, answers}) {

  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [hasVoted, setHasVoted] = useState(false);

  const handleHelpfulClick = (e) => {
    e.preventDefault();
    if (!hasVoted) {
      setHelpfulness(helpfulness + 1);
      setHasVoted(true);
    }
  };

   return (
    <div className="question-container">
      <div className="question-row">
        <span className="question-text">Q: {question.question_body}</span>
          <span className="question-actions">
            Helpful? <a href="#" onClick={handleHelpfulClick}>Yes</a> ({helpfulness}) |
            <a href="#">Add Answer</a>
          </span>
      </div>
      <AnswerList answers={answers}/>
    </div>
  );
}

export default Question;