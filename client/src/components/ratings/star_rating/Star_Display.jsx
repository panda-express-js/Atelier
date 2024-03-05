import React , { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// DESCRIPTION
//
// Star Rating - Solid or outlined stars, where the solid stars represent the review score. A total of 5 stars should always appear,
//  and the amount filled in should correspond to the average score.
// The visual for rating should be representative of up to a quarter of a review point.
//  ** For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.

// takes in the number that's passed through and only handles the job of displaying the stars
   // (this way it can be used by "Average" star rating as well as individual review stars)

export default function StarDisplay (props) {
  // props.rating should be the number
  // number goes in => stars come out


  // define helper function to find the nearest quarter
  function nearestQuarter (num) {
    if ((num - Math.floor(num)) > 0) {
      let remainder = num - Math.floor(num);

      if (remainder < .25) {
        console.log(`this is remainder ${remainder}`)
        return Math.floor(num);
      } else if ((remainder >= .25) && (remainder < .5)) {
        num = Math.floor(num) + .25;
        return num;
      } else if ((remainder >= .5) && (remainder < .75)) {
        num = Math.floor(num) + .5;
        return num;
      } else if ((remainder >= .75) && (remainder <= .99)) {
        num = Math.floor(num) + .75;
        return num;
      }
    } else {
      return num;
    }

  }

  let rating = nearestQuarter(props.rating)

  // percentage rating out of 5 //// 2.5 is 50% etc.

  let starPercentage = (((rating / 5) * 100).toString() + '%');

  let ratingArray = [ 0, 0, 0, 0, 0 ]

  // map over the rating array and create a star for each number in the array

  return (
    <div className="star-box">
      <div className="star-box-empty">
    {
    function() {
      let ratingDisplay = ratingArray.map(() => {
          return <FontAwesomeIcon icon={faStar} className={`star-empty`} />
      })
      return ratingDisplay;
    }()
  }
  <div className="star-box-full" style={{"width": `${starPercentage}`}}>
  {
    function() {
      let ratingDisplay = ratingArray.map(() => {
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