import React , { useState } from 'react';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';


function QuestionList({server, options, product, answers, questions}) {
  const [displayQuestions, setDisplayQuestions] = useState (2);

  // Sort questions by helpfulness
  const sortedQuestions = [...questions].sort((a, b) => b.question_helpfulness - a.question_helpfulness);

  const showMoreQuestions = () => {
    setDisplayQuestions(prev => prev + 2);
  };
  const handleQuestionSubmit = (questionData) => {
    // axios.post(`${server}/qa/questions`, questionData, options)
    axios.post(`${server}/qa/questions?product_id=${product.id}`, questionData, options)
      .then(() => {
        console.log('Question added successfully:', questionData);
        })
      .catch(error => console.error('Error adding question:', error));
  };


  return (
    <div className='questionlist-container' >
      {sortedQuestions.slice(0, displayQuestions).map((question, index) => (
        <Question server={server} options={options} product={product} key={question.question_id} question={question} answers={answers[question.question_id]} />
      ))}
      <div className='buttons-container'>
          {sortedQuestions.length > displayQuestions && (
            <button onClick={showMoreQuestions} className='button'>More Answered Questions</button>
          )}
          <AddQuestion productId = {product.id} productName={product.name} onSubmitQuestion={handleQuestionSubmit}/>
      </div>
    </div>
  );
}

export default QuestionList;
