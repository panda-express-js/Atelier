import React , { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx'

// pass in API data to drill down to the individual review tiles

// need to use useEffect so it only renders once

export default function ReviewList ({ product , server, options, reviews, setReviews }) {

  const [sort, setSort] = useState("relevant")

  // call the API and update review state using useEffect

  useEffect(() => {
    console.log(product.id, "this is the product ID in useEffect")
    axios.get(`${server}/reviews?product_id=${product.id}&sort=${sort}&count=2`, options).then( (response) => {
      setReviews(response.data)
    }).catch((err) => console.log(err))
  },[])


  if(reviews.results) {console.log(reviews, " these are the reviews passed down from generation to generation")};

  return <div className="review-list">
    <h3>Reviews</h3>
    <div className="sort-div">
    <label for="sort">Sort by:</label>

      <select name="sort" className="sort">
        <option value="newest">newest</option>
        <option value="relevant">relevant</option>
        <option value="helpful">helpful</option>
      </select>
    </div>
    {function () {
      if (reviews.results){
      let currReviews = reviews.results.map((review) => {
        return <ReviewTile rating={review.rating} date={review.date} username={review.reviewer_name}
        summary={review.summary} body={review.body} />
      })
      return currReviews;}
    }()}
  </div>
}