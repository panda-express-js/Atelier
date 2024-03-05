import React , { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Star Rating - Solid or outlined stars, where the solid stars represent the review score. A total of 5 stars should always appear,
//  and the amount filled in should correspond to the average score.
// The visual for rating should be representative of up to a quarter of a review point.
//  ** For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.

// takes in the number that's passed through and only handles the job of displaying the stars
   // (this way it can be used by "Average" star rating as well as individual review stars)

export default function StarDisplay (props) {
  // props.rating should be the number
  // number goes in => stars come out

  // ** replace number with props.rating after AverageStarRating is implemented
  let number = 3.25 // for testing

  // make the rounding in here too - try using a helper function

  // percentage rating out of 5 //// 2.5 is 50% etc.
  let ratingArray = [ 0, 0, 0, 0, 0 ]

  // can use Math.floor to find out how many stars to render without the percentages
  // multiply the remainder (if any) by 100 to find out what percentage it should be

  let flatNum = Math.floor(number)

  for (let i = 0; i < flatNum; i++) {
    ratingArray[i] = 100;
  }

  if (ratingArray.includes(0)) {
    if ((number - flatNum) > 0) {
      var remainder = number - flatNum;
      // add logic to make the first 0 in the array be replaced with the remainder
      // as a whole integer (multiplied by 100)
      ratingArray[ratingArray.indexOf(0)] = (remainder * 100)
      console.log(ratingArray);
    }

  }

  // map over the rating array and create a star for each number in the array
  // with a different className based on the number in the array

  return (
    <div className="star-box">
      <div className="star-box-empty">
    {
    function() {
      let ratingDisplay = ratingArray.map((num) => {
          return <FontAwesomeIcon icon={faStar} className={`star-empty`} />
      })
      return ratingDisplay;
    }()
  }
  <div className="star-box-full" style={{"width": "50%"}}>
  {
    function() {
      let ratingDisplay = ratingArray.map((num) => {
          return <FontAwesomeIcon icon={faStar} className={`star-full`} />
      })
      return ratingDisplay;
    }()
  }
  </div>
  </div>

  </div>
  );
};