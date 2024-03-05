import React , { useState, useEffect } from 'react';
import StarDisplay from './star_rating/Star_Display.jsx'


export default function ReviewTile ({ rating, date, username, summary, body }) {


  return <div className="review-tile">
    <div className="username">{username} </div>
    <div className="date">{date}</div>
    <br></br>
    <StarDisplay rating={rating} />
    <br></br>
    <div className="summary">{summary}</div>
    <br></br>
    <div className="body">{body}</div>
    <br></br>
  </div>
}