import React, {useState} from 'react';
import axios from 'axios';
import './QandA.css';

function Answer({ server, options, answer }) {

  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [hasVoted, setHasVoted] = useState(false);
  const [reported, setReported] = useState(false);
  //modal for the images in answers
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleHelpfulClick = (e) => {
    e.preventDefault();
    if (!hasVoted) {
      setHelpfulness(helpfulness + 1);
      setHasVoted(true);
      axios.put(`${server}/qa/answers/${answer.answer_id}/helpful`,{}, options)
      .then(() => {
        console.log('Answer Helpfulness updated successfully');
      })
      .catch(error => {
        console.error('Error updating answer helpfulness:', error);
      });
    }
  };

  const handleReportClick = (e) => {
    e.preventDefault();
    if (!reported) {
      setReported(true);
      axios.put(`${server}/qa/answers/${answer.answer_id}/report`,{}, options)
      .then(() => {
        console.log('Answer reported successfully');
      })
      .catch(error => {
        console.error('Error reporting answer:', error);
      });
    }
  };

  const answerDate = new Date(answer.date);

  const formattedDate = answerDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const isSeller = answer.answerer_name.toLowerCase() === 'seller';

  const openImageModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setIsModalOpen(true);
  };

   return (
    <div>
      <p>A: {answer.body}</p>
      <p className="answer-info">
        by {isSeller ? <strong>Seller</strong> : answer.answerer_name}, {formattedDate} | Helpful?{' '}
        <a href='' className="link" onClick={handleHelpfulClick}>Yes</a> ({helpfulness}) |
        {reported ? <span className="reported-text"> Reported</span> :
        <a href='#' className="link" onClick={handleReportClick}> Report</a>}
      </p>
      {answer.photos && answer.photos.length > 0 && (
        <div className="image-thumbnails">
          {answer.photos.map((photo, index) => (
            <img key={index} src={photo.url} alt={`Thumbnail ${index + 1}`} onClick={() => openImageModal(photo.url)} style={{ width: 100, height: 100, cursor: 'pointer', margin: '5px' }} />
          ))}
        </div>
      )}
      {isModalOpen && (
        <div className="photo-modal" onClick={() => setIsModalOpen(false)}>
           <div className="photo-modal-content" onClick={e => e.stopPropagation()}>
          <img src={currentImage} alt="Full size"/>
          <button onClick={() => setIsModalOpen(false)} className="close-modal-btn">X</button>
        </div>
        </div>
      )}
    </div>
  );
}
export default Answer;
