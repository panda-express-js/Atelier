import React from 'react';
import StarDisplay from './star_rating/Star_Display.jsx'

export default function RatingsReviews () {

  return (
  <div id="Ratings & Reviews">
    <h2>Ratings & Reviews</h2>
    <>Here's a review</>
    <br></br>
    <>Star rating test</>
    <br></br>
    <StarDisplay rating={4.5}/>
  </div>
)
}