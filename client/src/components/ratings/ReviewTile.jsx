import React , { useState, useEffect } from 'react';
import StarDisplay from './star_rating/Star_Display.jsx'


export default function ReviewTile ({ rating, date, username, summary, body }) {

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
  </div>
}