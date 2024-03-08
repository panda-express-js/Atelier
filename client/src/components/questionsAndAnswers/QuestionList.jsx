import React , { useState } from 'react';
import Question from './Question.jsx';


function QuestionList({server, options, product, answers, questions}) {
  const [displayQuestions, setDisplayQuestions] = useState (2);

  // Sort questions by helpfulness
  const sortedQuestions = [...questions].sort((a, b) => b.question_helpfulness - a.question_helpfulness);

  const showMoreQuestions = () => {
    setDisplayQuestions(prev => prev + 2);
  };

  return (
    <div className="questionlist-container" >
      {sortedQuestions.slice(0, displayQuestions).map((question, index) => (
        <Question server={server} options={options} product={product} key={question.question_id} question={question} answers={answers[question.question_id]} />
      ))}
      {sortedQuestions.length > displayQuestions && (
        <button onClick={showMoreQuestions}>More Answered Questions</button>
      )}
    </div>
  );
}

export default QuestionList;
