import React , { useState, useEffect } from 'react';

// note requirements here
// pass in API data to drill down to the individual review tiles

export default function ReviewList ({product, reviews, server, options, setReviews}) {

  console.log(reviews, " these are the reviews passed down from generation to generation")
  console.log(product, " this is the product bby")

  return <div id="review-list">
    This is a list of reviews, I promise
  </div>
}