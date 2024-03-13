import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App, { getAverageRatingFromMeta } from '../components/App.jsx';

const metaObjExample = {
  "product_id": "40344",
  "ratings": {
      "1": "3",
      "2": "3",
      "3": "3",
      "4": "3",
      "5": "3"
  },
  "recommended": {
      "false": "486",
      "true": "1401"
  },
  "characteristics": {
      "Fit": {
          "id": 135219,
          "value": "3.2295786758383491"
      },
      "Length": {
          "id": 135220,
          "value": "3.2451669595782074"
      },
      "Comfort": {
          "id": 135221,
          "value": "3.3500455788514129"
      },
      "Quality": {
          "id": 135222,
          "value": "3.3663366336633663"
      }
  }
}

describe(App, () => {

  it('renders the page', () => {
    render(<App />);
    expect(screen.getByText("Atelier")).toBeInTheDocument();
  })

  it('calculates correct average rating for product', () => {
    expect(getAverageRatingFromMeta(metaObjExample)).toBe(3);
  })

})