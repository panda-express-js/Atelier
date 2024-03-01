
import React  from 'react';


function QuestionList({ questions}) {

  if (!Array.isArray(questions.results)) {
    return <div>No questions yet</div>;
  }

  return (
    <div>
      {questions.results.map((question, index) => (
        <div key={index}>{question.question_body}</div>
      ))}
    </div>
  );
}

export default QuestionList;
