import React , { useState, useEffect } from 'react';
import StarDisplay from './star_rating/Star_Display.jsx'
import Helpful from './Helpful.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export default function ReviewTile ({ rating, date, username, summary, body, recommend, response, helpful, updateHelpfulAPI, reviewID }) {

  const newDate = new Date(date).toDateString();

  const [helpfulness, setHelpfulness] = useState(helpful);


  return <div className="review-tile">
    <div className="date">{newDate}</div>
    <div className="username">{username} </div>
    <br></br>
    <StarDisplay rating={rating} />
    <br></br>
    {
      function () {
        if (response) {
          return <div className="response-box">
            <span className="response">Response from seller </span>
            <span className="response">{response}</span>
          </div>
        }
      }()
    }
    <br></br>
    <div className="summary">{summary}</div>
    <br></br>
    <div className="body">{body}</div>
    <br></br>
    {
      function () {
        if (recommend === true) {
          return <div className="recommendation-box">
            <span className="recommendation">I recommend this product </span>
            <FontAwesomeIcon icon={faCheck} />
          </div>
        }
      }()
    }
    <Helpful helpful={helpfulness} setHelpful={setHelpfulness} updateHelpfulAPI={updateHelpfulAPI} reviewID={reviewID}/>
  </div>
}