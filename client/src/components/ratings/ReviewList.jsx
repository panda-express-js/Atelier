import React , { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';


// pass in API data to drill down to the individual review tiles

// need to use useEffect so it only renders once

// try looping through all reviews until all are retrieved and then limiting the amount shown instead.
// Will help for the breakdown and its filter by rating

export default function ReviewList ({ product , server, options, reviews, setReviews }) {

  const [sort, setSort] = useState("relevant")

  const [count, setCount] = useState(2)

  const [ratingFilter, setRatingFilter] = useState([1,2,3,4,5])

  const [reviewMeta, setReviewMeta] = useState(null)

  const handleSelectChange = (event) => {
    setSort(event.target.value);
};

  const handleMoreReviews = () => {
    let newCount = count + 2;
    setCount(newCount);
  }

  // call the API and update review state using useEffect

  //use pagination
  // when they click "View more button" make it change the state of the pagination
  // make the count remain 2 and only show 2 more each time
  // then make the section scrollable if need be afterwards

// Reviews API Call

  useEffect(() => {

    axios.get(`${server}/reviews?product_id=${product.id}&sort=${sort}&count=${count}`, options).then( (response) => {
        // if (response.data.length === count){
        // count = count + 250;
        // setSort(sort)}
        // enhance this in the future to only pull aa many as we need at a time
      setReviews(response.data)

    }).catch((err) => console.log(err))
  },[sort, count])

// Rating Metadata API Call

  useEffect(() => {
    axios.get(`${server}/reviews/meta?product_id=${product.id}`, options).then((result) => {
      setReviewMeta(result.data);
    }).catch((err) => console.log(err))
  }, [])

  function helpfulAPIUpdate (reviewID) {
    axios.put(`${server}/reviews/:${reviewID}/helpful`, options).then((response) => {console.log(response.data, " response from helpful change")}).catch((err) => {console.log(err)})
  }

// add logic for if the count of reviews is 0 we collaps that list and don't show the associated buttons
// use the length of the list and the number of reviews as gotten by the metadata to determine when the more reviews
// button should disappear

  // if(reviews.results) {console.log(reviews.results, " these are the reviews passed down from generation to generation")};

  return <div className="review-list">
    <h3>Reviews</h3>
    <div>
      {function (){
        if (reviewMeta) {
          return <RatingBreakdown reviewMeta={reviewMeta} ratingFilter={ratingFilter} setRatingFilter={setRatingFilter} />;
        }
      }()}
    </div>
    <div className="sort-div">
    <label htmlFor="sort">Sort by:</label>

      <select name="sort" className="sort" value={sort} onChange={handleSelectChange}>
        <option value="relevant">relevant</option>
        <option value="newest">newest</option>
        <option value="helpful">helpful</option>
      </select>
      <br></br>
    </div>
    {function () {
      if (reviews.results){
      let currReviews = reviews.results.map((review) => {
        console.log("Here's a review bud ", review)
        if (ratingFilter.includes(review.rating)) {
          return <ReviewTile key={review.review_id} reviewID={review.review_id} rating={review.rating} date={review.date} username={review.reviewer_name}
          summary={review.summary} body={review.body} recommend={review.recommend} response={review.response} helpful={review.helpfulness}
          updateHelpfulAPI={helpfulAPIUpdate}/>
        }
      })
      return currReviews;}
    }()}
    <button onClick={handleMoreReviews} type="button" className="button">More Reviews</button>
  </div>
}