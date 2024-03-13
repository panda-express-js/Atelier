import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import ReviewTile from '../components/ratings/ReviewTile.jsx'
import RatingsReviews from '../components/ratings/Index.jsx'
import RatingBreakdown from '../components/ratings/RatingBreakdown.jsx';
import Helpful from '../components/ratings/Helpful.jsx';
import ReviewList from '../components/ratings/ReviewList.jsx';
import { GITHUB_APIKEY } from '../../../config.js';
/*data */
const server = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp";
const options = {headers: {'Authorization': `${GITHUB_APIKEY}`}};
const product = {
  "id": 41088,
  "campus": "hr-rfp",
  "name": "Zora Tank Top",
  "slogan": "At possimus reprehenderit.",
  "description": "Repellat eius necessitatibus sed excepturi. Ut repudiandae vitae eveniet ab. Sint beatae molestiae non. Occaecati expedita voluptatum doloribus dolor ab quis quas sit aspernatur. Ullam veniam consequatur officiis eius repudiandae dolorem aut.",
  "category": "Tank Top",
  "default_price": "427.00",
  "created_at": "2021-08-13T14:38:44.588Z",
  "updated_at": "2021-08-13T14:38:44.588Z",
  "features": [
      {
          "feature": "Cut",
          "value": "\"Loose\""
      },
      {
          "feature": "5 Year Warranty",
          "value": null
      },
      {
          "feature": "Fair Trade Certified",
          "value": null
      },
      {
          "feature": "Green Leaf Certified",
          "value": null
      }
  ]
};
const meta = {
  "product_id": "41088",
  "ratings": {
      "1": "7",
      "2": "6",
      "3": "11",
      "4": "6",
      "5": "5"
  },
  "recommended": {
      "false": "7",
      "true": "28"
  },
  "characteristics": {
      "Fit": {
          "id": 137739,
          "value": "2.9142857142857143"
      },
      "Length": {
          "id": 137740,
          "value": "3.1714285714285714"
      },
      "Comfort": {
          "id": 137741,
          "value": "2.9428571428571429"
      },
      "Quality": {
          "id": 137742,
          "value": "2.8285714285714286"
      }
  }
}
const avgRating=2.89;
const reviews=[];
describe('RatingsReviews', () => {
  const setReviews = jest.fn();
  it('renders divs', () => {
    render(<RatingsReviews server={server} options={options} product={product} reviews={reviews} meta={meta} avgRating={avgRating} setReviews={setReviews}/>)
    expect(screen.getByTestId('R&R')).toBeInTheDocument();
    expect(screen.getByText('Ratings & Reviews')).toBeInTheDocument();
  })
})

