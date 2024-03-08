import React, { useState } from 'react';
import './QandA.css';

const AddQuestion = ( { productId, productName, onSubmitQuestion  }) => {
  const [openModal, setOpenModal] = useState(false);
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  //find this in stackoverflow to validate email
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+$/.test(email);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (!question) {
      setErrorMessage('Question is blank, you must enter a question.');
      return;
    }
    if(!nickname) {
      setErrorMessage('Nickname is blank, you must enter a nickname.');
      return;
    }
    if(!email) {
      setErrorMessage('Email is blank, you must enter a email.');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('The email address provided is not in correct email format');
      return;
    }

    const questionData = {
      body: question,
      name: nickname,
      email: email,
      product_id: productId,
    };

    onSubmitQuestion(questionData);
    setOpenModal(false);
  }

  return (
    <div>
      <button onClick={() => setOpenModal(true)}>Ask a Question</button>
      {openModal && (
          <div>
            <div className='modal'>
              <button className="close" onClick={() => setOpenModal(false)}>Close</button>
              <h2>Ask Your Question</h2>
                <h3>About the {productName}</h3>
                <form onSubmit={handleQuestionSubmit}>
                  <label>Your Question : (mandatory)*
                    <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    maxLength="1000" required>
                    </textarea>
                  </label>
                  <label>What is your nickname (mandatory)*
                    <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    maxLength="60"
                    placeholder="Example: jackson11!" required />
                    <p>For privacy reasons, do not use your full name or email address</p>
                  </label>
                  <label>Your email (mandatory)*
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength="60"
                    placeholder="Why did you like the product or not?" required />
                    <p>For authentication reasons, you will not be emailed</p>
                  </label>
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                  <button type="submit">Submit question</button>
                </form>
            </div>
          </div>
      )}
    </div>
  )
}

export default AddQuestion;