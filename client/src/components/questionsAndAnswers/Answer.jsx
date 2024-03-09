import React, {useState} from 'react';
import axios from 'axios';

function Answer({ server, options, answer }) {

  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [hasVoted, setHasVoted] = useState(false);
  const [reported, setReported] = useState(false);

  const handleHelpfulClick = (e) => {
    e.preventDefault();
    if (!hasVoted) {
      setHelpfulness(helpfulness + 1);
      setHasVoted(true);
      axios.put(`${server}/qa/questions/${answer.answer_id}/helpful`,{}, options)
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
      axios.put(`${server}/qa/questions/${answer.answer_id}/report`,{}, options)
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

   return (
    <div>
      <p>A: {answer.body}</p>
      <p>
        by {isSeller ? <strong>Seller</strong> : answer.answerer_name}, {formattedDate} | Helpful? <a href='' onClick={handleHelpfulClick}>Yes</a> ({helpfulness}) |
        {reported ? ' Reported' : <a href='' onClick={handleReportClick}> Report</a>}
      </p>
    </div>
  );
}
export default Answer;
