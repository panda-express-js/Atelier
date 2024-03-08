import React , { useState, useEffect } from 'react';
import StarDisplay from './star_rating/Star_Display.jsx'
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const HorizontalBarChart = ({ratings}) => {

  console.log(ratings, " this is ratings from within the Horizontal Bar Chart")

  let dataArray = []

  dataArray[0] = Number(ratings['1'])
  dataArray[1] = Number(ratings['2'])
  dataArray[2] = Number(ratings['3'])
  dataArray[3] = Number(ratings['4'])
  dataArray[4] = Number(ratings['5'])


  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label:'Ratings',
        data: dataArray,
        backgroundColor: '#61DBFB'
      }
    ]
  }
  const options = {
    indexAxis:  'y',
    layout: {
      padding: '2rem'
    }
  };

  return (
    <div>

      <Bar data={data} options={options}></Bar>
    </div>
  )
}


// use metadata for review averages

// pass down the ability to set the filtering rules from ReviewList and make some logic
// in here regarding that
// use a weighted average for the ratings

// Helper function goes here

function averageRating (ratingObject) {
  // rating = (sum_of_ratings * 5)/max_rating_by_user_count

  let totalRatings = 0;
  let sumOfRatings = 0;

  for (let key in ratingObject) {
    totalRatings += Number(ratingObject[key]);
    sumOfRatings += Number(ratingObject[key]) * Number(key)
  }

  let somethingelse = sumOfRatings / totalRatings;

  somethingelse = parseFloat(somethingelse.toFixed(5))

  return somethingelse;

}

// use toFixed to make the decimal places be fewer

export default function RatingBreakdown ({ reviewMeta, ratingFilter, setRatingFilter }) {
  console.log(reviewMeta, " this is reviewMeta")



  let productAvgRating = averageRating(reviewMeta.ratings)
  console.log(productAvgRating, " this is productAvgRating")


  return <div className="Rating Breakdown">
    <>This is the average rating</>
    <StarDisplay rating={productAvgRating} />
    <HorizontalBarChart ratings={reviewMeta.ratings}/>
  </div>
}