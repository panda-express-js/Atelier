import React , { useState, useEffect } from 'react';
import StarDisplay from './star_rating/Star_Display.jsx'


// use metadata for review averages

// pass down the ability to set the filtering rules from ReviewList and make some logic
// in here regarding that
// use a weighted average for the ratings

export default function RatingBreakdown ({ reviewMeta, ratingFilter, setRatingFilter }) {
  console.log(reviewMeta, " this is reviewMeta")


  return <div className="Rating Breakdown"> This is the Rating Breakdown</div>
}