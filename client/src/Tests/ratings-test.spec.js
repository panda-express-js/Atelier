import React from 'react';
import { render, screen } from '@testing-library/react';

import StarDisplay from '../ratings/star_rating/Star_Display.jsx'
import ReviewList from '../ratings/ReviewList.jsx'

// Sample data

let rating = 4;

describe(Rating, () => {

  it('renders the correct rating width', () => {
    render(<ReviewList reviews={reviews} product={product} server={server} options={options} setReviews={setReviews}/>);
    expect(screen.getByText("Insert Text")).toBeInTheDocument();
  })
})
