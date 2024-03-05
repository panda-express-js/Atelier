import React from 'react';

function Answer({ answer }) {

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
        by {isSeller ? <strong>Seller</strong> : answer.answerer_name}, {formattedDate} Helpful? Yes ({answer.helpfulness})
      </p>
    </div>
  );
}

export default Answer;
