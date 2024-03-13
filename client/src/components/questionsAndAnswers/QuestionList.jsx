import React , { useState } from 'react';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';
import axios from 'axios';


function QuestionList({server, options, product, answers, questions, searchTerm}) {
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

  const highlightText = (text, searchTerm) => {
    if (!searchTerm || searchTerm.length < 3) {
      return text;
    }

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, index) => (
      regex.test(part) ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : part
    ));
  };


  return (
    <div className='questionlist-container' >
      {sortedQuestions.slice(0, displayQuestions).map((question, index) => (
        <Question server={server} options={options} product={product} key={question.question_id} question={question} answers={answers[question.question_id]} searchTerm={searchTerm} highlightText={highlightText} />
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
