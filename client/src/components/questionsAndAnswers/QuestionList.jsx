import React  from 'react';
import Question from './Question.jsx';


function QuestionList({answers, questions}) {

  // Sort questions by helpfulness
  const sortedQuestions = [...questions].sort((a, b) => b.question_helpfulness - a.question_helpfulness);

  return (
    <div>
       {questions.map((question, index) => (
        <Question key={question.question_id} question={question} answers={answers[question.question_id]} />
      ))}
    </div>
  );
}

export default QuestionList;
