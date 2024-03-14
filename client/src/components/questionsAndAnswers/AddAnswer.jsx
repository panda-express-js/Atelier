import React, { useState } from 'react';
import './QandA.css';
import axios from 'axios';

const AddAnswer = ({ product, question, onSubmitAnswer, onClose}) => {
  const [yourAnswer, setYourAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [fileObjects, setFileObjects] = useState([]);
  const [photoPreviews, setPhotoPreviews] = useState([]);

  const validateEmail = (email) => /\S+@\S+\.\S+$/.test(email);

  //helper function to uploadphoto to cloudinary
  const uploadPhoto = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 't2iylfuw');
    return axios.post(`https://api.cloudinary.com/v1_1/dfpyly8jw/image/upload`, formData)
      .then(response => {
        return response.data.secure_url;
      })
      .catch(error => {
        console.error('Error uploading photo:', error.message);
        return '';
      })
  };
  const handleAnswerSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('The email address provided is not in correct email format');
      return;
    }
    // If there are photo files, upload them
    let validUrls = [];
    if (fileObjects.length > 0) {
      const uploadedPhotosUrls = await Promise.all(fileObjects.map(photo => uploadPhoto(photo)));
      validUrls = uploadedPhotosUrls.filter(url => url !== '');
    }

    const answerData = {
      body: yourAnswer,
      name: nickname,
      email: email,
      photos: validUrls
    };
    onSubmitAnswer(answerData);
  };

  const handlePhotoChange = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newFileObjects = [...fileObjects, ...files];
      const newPhotoPreviews = files.map(file => URL.createObjectURL(file));

      setFileObjects(newFileObjects);
      setPhotoPreviews([...photoPreviews, ...newPhotoPreviews]);
    }
  };
  const removePhoto = (indexToRemove) => {
    URL.revokeObjectURL(photoPreviews[indexToRemove]);
    setFileObjects(fileObjects.filter((_, index) => index !== indexToRemove));
    setPhotoPreviews(photoPreviews.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
        <div className='modal'>
          <button className="close" onClick= {onClose}>Close</button>
          <h2>Submit Your Answer</h2>
          <h3>{product.name}: {question.question_body}</h3>
          <form onSubmit={handleAnswerSubmit}>
            <label>Your Answer: (mandatory)*
              <textarea value={yourAnswer} onChange={(e) => setYourAnswer(e.target.value)} maxLength="1000" required>
              </textarea>
            </label>
            <label>What is your nickname (mandatory)*
              <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)}maxLength="60"placeholder="Example: jack543!" required />
              <p>For privacy reasons, do not use your full name or email address</p>
            </label>
            <label>Your email (mandatory)*
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength="60" placeholder="Example: jack@email.com" required />
              <p>For authentication reasons, you will not be emailed</p>
            </label>
          <div className="photos-container">
            {photoPreviews.map((photoUrl, index) => (
              <div key={index} className="photo-item">
                <img src={photoUrl} alt={`Preview ${index}`} style={{ width: '100px', height: '100px' }} />
                <button type="button" onClick={() => removePhoto(index)} className="remove-photo-btn">X</button>
              </div>
            ))}
          </div>
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