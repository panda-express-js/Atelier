import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from './photos.jsx';
import Details from './details.jsx';
import Summary from './summary.jsx';
import './prodDetail.css';

const ProductDetail = ({ product, allStyles, style, reviews, setStyle, avgRating }) => {

  return (
    <div data-testid="overviewContainer" id="overviewContainer">
      <Photos style={style} />
      <Details product={product} allStyles={allStyles} style={style} reviews={reviews} setStyle={setStyle} avgRating={avgRating} />
      <Summary product={product} />
    </div>
  )
}

export default ProductDetail;