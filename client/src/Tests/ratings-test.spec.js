import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';

import ReviewTile from '../components/ratings/ReviewTile.jsx'

import RatingBreakdown from '../components/ratings/RatingBreakdown.jsx';
import Helpful from '../components/ratings/Helpful.jsx';
import ReviewList from '../components/ratings/ReviewList.jsx';

it('renders the review data properly', async () => {
    render(<ReviewTile rating={4} date={"Jan 4th"} username={"Billy"} summary={"It's a summary"} body={"Body Body Body"}/>);
    expect(screen.getByText("Billy")).toBeInTheDocument();
  })

describe('RatingBreakdown', () => {
    it('displays the average rating correctly', () => {
      const avgRating = 4.25;
      const reviewMeta = { ratings: { '1': '10', '2': '20', '3': '30', '4': '40', '5': '50' } };
      const setRatingFilter = jest.fn();

      render(<RatingBreakdown reviewMeta={reviewMeta} ratingFilter={null} setRatingFilter={setRatingFilter} avgRating={avgRating} />);
      expect(screen.getByText("4.25")).toBeInTheDocument();
    });
  });



describe('Helpful', () => {
    it('increments helpful count on "Yes" click and prevents further increments', () => {
      let helpful = 1;
      const setHelpful = (newHelpful) => { helpful = newHelpful; };
      const updateHelpfulAPI = () => {};
      const { rerender } = render(
        <Helpful
          helpful={helpful}
          setHelpful={setHelpful}
          updateHelpfulAPI={updateHelpfulAPI}
          reviewID="123"
        />
      );
      fireEvent.click(screen.getByText(/Yes/i));
      rerender(
        <Helpful
          helpful={helpful}
          setHelpful={setHelpful}
          updateHelpfulAPI={updateHelpfulAPI}
          reviewID="123"
        />
      );
      expect(screen.getByText(/2 people found this helpful/i)).toBeInTheDocument();

  });

})
