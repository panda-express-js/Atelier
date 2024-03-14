import React, { useState}  from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import axios from 'axios';
import './QandA.css';


function Question({server, options, product, question, answers,  searchTerm, highlightText}) {

  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [hasVoted, setHasVoted] = useState(false);
  const [openAddAnswerModal, setOpenAddAnswerModal] = useState(false);

  const handleHelpfulClick = (e) => {
    e.preventDefault();
    if (!hasVoted) {
      axios.put(`${server}/qa/questions/${question.question_id}/helpful`,{}, options)
      .then(() => {
          setHelpfulness(helpfulness + 1)
          setHasVoted(true);
          console.log('Question Helpfulness updated successfully');
        })
        .catch(error => {
          console.error('Error updating question helpfulness:', error);
        });
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
        handleCloseAddAnswerModal()
      })
      .catch(error => console.error('Error adding answer:', error));

  };



   return (
    <div className='question-container'>
      <div className='question-row'>
        <span className='question-text'>Q: {highlightText(question.question_body, searchTerm)}</span>
          <span className='question-actions'>
            Helpful? <a href='' onClick={handleHelpfulClick}>Yes</a> ({helpfulness}) |
            <a href='' onClick ={handleOpenAddAnswerModal}> Add Answer</a>
          </span>
      </div>
      <AnswerList server={server} options={options}answers={answers}/>
      {openAddAnswerModal && (
        <AddAnswer product={product} question={question}onSubmitAnswer={onSubmitAnswer} onClose={handleCloseAddAnswerModal}/>
      )}

    </div>
  );
}

export default Question;
