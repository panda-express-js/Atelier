import React from 'react';
import { render, screen } from '@testing-library/react';

import ReviewTile from '../components/ratings/ReviewTile.jsx'

it('renders the review data properly', () => {
    render(<ReviewTile rating={4} date={"Jan 4th"} username={"Billy"} summary={"It's a summary"} body={"Body Body Body"}/>);
    expect(screen.getByText("Billy")).toBeInTheDocument();
  })