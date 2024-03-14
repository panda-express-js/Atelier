import React , { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import AddReview from './AddReview.jsx';


// pass in API data to drill down to the individual review tiles

// need to use useEffect so it only renders once

// try looping through all reviews until all are retrieved and then limiting the amount shown instead.
// Will help for the breakdown and its filter by rating

export default function ReviewList ({ product , server, options, reviews, setReviews, avgRating }) {

  const [sort, setSort] = useState("relevant")

  const [count, setCount] = useState(2)

  const [ratingFilter, setRatingFilter] = useState([1,2,3,4,5])

  const [reviewMeta, setReviewMeta] = useState(null)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleSelectChange = (event) => {
    setSort(event.target.value);
};

  const handleMoreReviews = () => {
    let newCount = count + 2;
    setCount(newCount);
  }

  // call the API and update review state using useEffect

// Reviews API Call

  useEffect(() => {

    axios.get(`${server}/reviews?product_id=${product.id}&sort=${sort}&count=${count}`, options).then( (response) => {

      setReviews(response.data)

    }).catch((err) => console.log(err))
  },[sort, count, product.id])

// Rating Metadata API Call

  useEffect(() => {
    axios.get(`${server}/reviews/meta?product_id=${product.id}`, options).then((result) => {
      setReviewMeta(result.data);
    }).catch((err) => console.log(err))
  }, [])

// Helpful review API call
  function helpfulAPIUpdate (reviewID) {
    axios.put(`${server}/reviews/${reviewID}/helpful`,{}, options).then(() => {console.log("Answer Helpfulness updated successfully")}).catch((err) => {console.log(err)})
  }


  return <div className="review-list">
    <h3>Reviews</h3>
    <div>
      {function (){
        if (reviewMeta) {
          return <RatingBreakdown  className="rating-breakdown" reviewMeta={reviewMeta} ratingFilter={ratingFilter} setRatingFilter={setRatingFilter} avgRating={avgRating} />;
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
    <div className="list-container">
    <div className="actual-list">
    {function () {
      if (reviews.results){
        // console.log(reviews.results, " review results baby!")
      let currReviews = reviews.results.map((review) => {
        if (ratingFilter.includes(review.rating)) {
          if (review.body.includes("img")) {
            console.log(review.body, " this one has an image")
          }
          return <ReviewTile key={review.review_id} reviewID={review.review_id} rating={review.rating} date={review.date} username={review.reviewer_name}
          summary={review.summary} body={review.body} recommend={review.recommend} response={review.response} helpful={review.helpfulness}
          updateHelpfulAPI={helpfulAPIUpdate} avgRating={avgRating} />
        }
      })
      return currReviews;}
    }()}
    {function (){
      if (reviews.results){
      if (reviews.results.length < 4 ) {
        return <div className="more-reviews">
        <button onClick={handleMoreReviews} type="button" className="button">More Reviews</button>
        <button onClick={()=> {openModal()}} type="button">+ Add a review</button>
        <AddReview  isModalOpen={isModalOpen} closeModal={closeModal} shouldCloseOnOverlayClick={false} product={product} />
        </div>
      }
    }
    }()}
    </div>
    {function (){
      if (reviews.results){
      if (reviews.results.length > 3 ) {
        return <div className="more-reviews">
        <button onClick={handleMoreReviews} type="button" className="button">More Reviews</button>
        <button onClick={()=> {openModal()}} type="button">+ Add a review</button>
        <AddReview  isModalOpen={isModalOpen} closeModal={closeModal} shouldCloseOnOverlayClick={false} product={product} />
        </div>
      }
    }
    }()}
    </div>
  </div>
}