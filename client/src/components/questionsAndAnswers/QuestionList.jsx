import React  from 'react';
import Question from './Question.jsx';


function QuestionList({answers, questions}) {

  if (!questions) {
    return <div>No questions yet</div>;
  }

  return (
    <div>
       {questions.map((question, index) => (
        <Question key={question.question_id} question={question} answers={answers[question.question_id]} />
      ))}
    </div>
  );
}

export default QuestionList;
