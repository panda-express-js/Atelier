import React , { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// takes in the number that's passed through and only handles the job of displaying the stars
   // (this way it can be used by "Average" star rating as well as individual review stars)

export default function StarDisplay (props) {
  // props.rating should be the number

  // ** replace number with props.rating after AverageStarRating is implemented
  let number = 3.25 // for testing
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
    }

  }

  console.log('this is the rating array ', ratingArray);

  // map over the rating array and create a star for each number in the array
  // with a different className based on the number in the array

  return (
    <>
    {
    function() {
      let ratingDisplay = ratingArray.map((num) => {
          return <FontAwesomeIcon icon={faStar} className={`star-${num}`} />
      })
      return ratingDisplay;
    }()
  }
  </>
  );
};