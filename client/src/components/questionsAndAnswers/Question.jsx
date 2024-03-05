import React, { useState, useEffect }  from 'react';
import AnswerList from './AnswerList.jsx';


function Question({question, answers}) {
  return (
    <div>
      <p>Q: {question.question_body} Helpful? Yes ({question.question_helpfulness})</p>
      <AnswerList answers={answers}/>
    </div>
  )
}

export default Question;