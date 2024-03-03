import React , { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// takes in the number that's passed through and only handles the job of displaying the stars
   // (this way it can be used by "Average" star rating as well as individual review stars)

export default function StarDisplay (props) {
  // props.rating should be the number
  // the rating should be averaged out in the average rating thing
  // otherwise we should only allow for stars to be broken down by the quarter

  // can use Math.floor to find out how many stars to render without the percentages

  return (<FontAwesomeIcon icon={faStar} />);
};