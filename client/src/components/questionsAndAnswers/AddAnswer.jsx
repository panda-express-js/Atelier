import React, { useState } from 'react';
import './QandA.css';

const AddAnswer = ({ product, question, onSubmitAnswer, onClose}) => {
  const [yourAnswer, setYourAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [photoUrl, setPhotoUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+$/.test(email);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('The email address provided is not in correct email format');
      return;
    }

    const answerData = {
      body: yourAnswer,
      name: nickname,
      email: email,
      photos: photos
    };

    onSubmitAnswer(answerData);
  };

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);

      setPhotos([...photos, imageUrl]);
    }
  };

  const handlePhotoUrlChange = (e) => {
    setPhotoUrl(e.target.value);
  };

  const addPhotoUrl = () => {
    if (photoUrl && photos.length < 5) {
      setPhotos([...photos, photoUrl]);
      setPhotoUrl('');
    }
  };

  const removePhoto = (indexToRemove) => {
    setPhotos(photos.filter((_, index) => index !== indexToRemove));
  };


  return (
    <div>
        <div className='modal'>
          <button className="close" onClick= {onClose}>Close</button>
          <h2>Submit Your Answer</h2>
          <h3>{product.name}: {question.question_body}</h3>
          <form onSubmit={handleAnswerSubmit}>
            <label>Your Answer: (mandatory)*
              <textarea
                value={yourAnswer}
                onChange={(e) => setYourAnswer(e.target.value)}
                maxLength="1000" required>
              </textarea>
            </label>
            <label>What is your nickname (mandatory)*
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                maxLength="60"
                placeholder="Example: jack543!" required />
              <p>For privacy reasons, do not use your full name or email address</p>
            </label>
            <label>Your email (mandatory)*
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength="60"
                placeholder="Example: jack@email.com" required />
              <p>For authentication reasons, you will not be emailed</p>
            </label>
            <label>Photo URL:
            <input
              type="text"
              value={photoUrl}
              onChange={handlePhotoUrlChange}
              placeholder="Enter image URL" />
            <button type="button" onClick={addPhotoUrl}>Add Photo</button>
          </label>
            {photos.map((photo, index) => (
              <div key={index}>
                <img src={photo} alt={`Uploaded ${index + 1}`} style={{ width: '100px', height: '100px' }} />
                <button onClick={() => removePhoto(index)}>X</button>
              </div>
              ))}

            {photos.length < 5 && (
            <label>
              Upload your photos
              <input type="file" onChange={handlePhotoChange} style={{ display: 'block' }} />
            </label>
            )}
           {errorMessage && <div className="error-message" data-testid="error-message">{errorMessage}</div>}
            <button type="submit">Submit answer</button>
          </form>
        </div>
    </div>
  );
};

export default AddAnswer;
