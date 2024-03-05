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

  const questionStyles = {
    fontWeight: 'bold'
  };

   return (
    <div>
      <p style={questionStyles}>Q: {question.question_body} Helpful? <a href="#" onClick={handleHelpfulClick}>Yes </a> ({helpfulness}) | <a href="#">Add Answer</a></p>
      <AnswerList answers={answers}/>
    </div>
  );
}

export default Question;