import React , { useState, useEffect } from 'react';
import StarDisplay from './star_rating/Star_Display.jsx'


// use metadata for review averages

// pass down the ability to set the filtering rules from ReviewList and make some logic
// in here regarding that
// use a weighted average for the ratings

// Helper function goes here

function averageRating (ratingObject) {
  // rating = (sum_of_ratings * 5)/max_rating_by_user_count

  let totalRatings = 0;
  let sumOfRatings = 0;

  for (let key in ratingObject) {
    totalRatings += Number(ratingObject[key]);
    sumOfRatings += Number(ratingObject[key]) * Number(key)
  }

  let somethingelse = sumOfRatings / totalRatings;

  somethingelse = parseFloat(somethingelse.toFixed(5))

  return rating;

}

// use toFixed to make the decimal places be fewer

export default function RatingBreakdown ({ reviewMeta, ratingFilter, setRatingFilter }) {
  console.log(reviewMeta, " this is reviewMeta")



  let productAvgRating = averageRating(reviewMeta.ratings)
  console.log(productAvgRating, " this is productAvgRating")


  return <div className="Rating Breakdown">
    <>This is the average rating</>
    <StarDisplay rating={productAvgRating} />
  </div>
}