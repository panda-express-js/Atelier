import React , { useState, useEffect } from 'react';
import StarDisplay from './star_rating/Star_Display.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export default function ReviewTile ({ rating, date, username, summary, body, recommend }) {

  const newDate = new Date(date).toDateString();


  return <div className="review-tile">
    <div className="date">{newDate}</div>
    <div className="username">{username} </div>
    <br></br>
    <StarDisplay rating={rating} />
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
  </div>
}