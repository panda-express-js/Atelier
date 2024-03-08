import React, { useState}  from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import axios from 'axios';
import './QandA.css';


function Question({server, options, product, question, answers}) {

  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [hasVoted, setHasVoted] = useState(false);
  const [openAddAnswerModal, setOpenAddAnswerModal] = useState(false);

  const handleHelpfulClick = (e) => {
    e.preventDefault();
    if (!hasVoted) {
      setHelpfulness(helpfulness + 1);
      setHasVoted(true);
    }
  };

  const handleOpenAddAnswerModal = (e) =>{
    e.preventDefault();
    setOpenAddAnswerModal(true);
  }
  const handleCloseAddAnswerModal =() => setOpenAddAnswerModal(false);
  const onSubmitAnswer = (answerData) => {
    axios.post(`${server}/qa/questions/${question.question_id}/answers`, answerData, options)
      .then(()=>{
        console.log('Answer submitted:', answerData);
      })
      .catch(error => console.error('Error adding answer:', error));

    handleCloseAddAnswerModal()
  };



   return (
    <div className='question-container'>
      <div className='question-row'>
        <span className='question-text'>Q: {question.question_body}</span>
          <span className='question-actions'>
            Helpful? <a href='' onClick={handleHelpfulClick}>Yes</a> ({helpfulness}) |
            <a href='' onClick ={handleOpenAddAnswerModal}> Add Answer</a>
          </span>
      </div>
      <AnswerList answers={answers}/>
      {openAddAnswerModal && (
        <AddAnswer product={product} question={question}onSubmitAnswer={onSubmitAnswer} onClose={handleCloseAddAnswerModal}/>
      )}

    </div>
  );
}

export default Question;
