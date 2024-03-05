import React , { useState, useEffect } from 'react';
import axios from 'axios';

// pass in API data to drill down to the individual review tiles

// need to use useEffect so it only renders once

export default function ReviewList ({product , server, options, reviews, setReviews }) {

  // call the API and update review state using useEffect

  if (product.id) {useEffect(() => {
    console.log(product.id, "this is the product ID in useEffect")
    axios.get(`${server}/reviews?product_id=${product.id}&sort=relevant&count=2`, options).then( (response) => {
      setReviews(response.data)
    }).catch((err) => console.log(err))
  },[])}


  console.log(reviews, " these are the reviews passed down from generation to generation");

  return <div id="review-list">
    This is a list of reviews, I promise
  </div>
}