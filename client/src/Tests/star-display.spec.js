import React from 'react';
import { render , screen, fireEvent } from '@testing-library/react';
import StarDisplay from '../components/ratings/star_rating/Star_Display.jsx'

describe('stardisplay', () => {
  test('renders divs', () => {
    render(<StarDisplay rating={3.5}/>)
    expect(screen.getByTestId('star-box')).toBeInTheDocument();
    expect(screen.getByTestId('star-box-empty')).toBeInTheDocument();
    expect(screen.getByTestId('star-box-full')).toBeInTheDocument();
  })
  test('renders .25', () => {
    render(<StarDisplay rating={0.24}/>)
    expect(screen.getByTestId('star-box')).toBeInTheDocument();
    expect(screen.getByTestId('star-box-empty')).toBeInTheDocument();
    expect(screen.getByTestId('star-box-full')).toBeInTheDocument();
  })
  test('renders .75', () => {
    render(<StarDisplay rating={0.75}/>)
    expect(screen.getByTestId('star-box')).toBeInTheDocument();
    expect(screen.getByTestId('star-box-empty')).toBeInTheDocument();
    expect(screen.getByTestId('star-box-full')).toBeInTheDocument();
  })
})