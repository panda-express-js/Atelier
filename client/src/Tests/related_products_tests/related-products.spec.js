import React from 'react';
import { render , screen } from '@testing-library/react';
import RelatedCard from '../../components/related_products/RelatedCard.jsx';
import RelatedCardsCarousel from '../../components/related_products/RelatedCardsCarousel.jsx';
import { GITHUB_APIKEY } from '../../../../config.js';

//jest.mock('axios');

const server = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp";
const options = {headers: {'Authorization': `${GITHUB_APIKEY}`}};
describe('RelatedCard Component', () => {
  const obj = {
    id: 4000,
    category: 'shoes',
    name: 'jordans',
    sale_price: null,
    default_price: '140.00',
    url: 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
  };

  it('renders image', () => {
    render(<RelatedCard id={obj.id} obj={obj} />);
    expect(screen.getByAltText('product image of jordans')).toBeInTheDocument();
  });

  it('renders name', () => {
    render(<RelatedCard id={obj.id} obj={obj} />);
    expect(screen.getByText('jordans')).toBeInTheDocument();
  });
});

describe('RelatedCardsCarousel', () => {
  const server = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp";
  const options = {headers: {'Authorization': `${GITHUB_APIKEY}`}};
  const uniqueProductIds = [40345, 40346, 40348, 40349];

});