import React from 'react';
import StarDisplay from './star_rating/Star_Display.jsx'
import ReviewList from './ReviewList.jsx'


export default function RatingsReviews ({ server, options, product, reviews, setReviews, avgRating }) {

  return (
  <div id="Ratings & Reviews">
    <h2>Ratings & Reviews</h2>
    <ReviewList reviews={reviews} product={product} server={server} options={options} setReviews={setReviews} avgRating={avgRating}/>
    <br></br>
  </div>
)
}