import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from './photos.jsx';
import Details from './details.jsx';
import Summary from './summary.jsx';

const ProductDetail = ({ product, allStyles, style, reviews, server, options, setStyle }) => {

  return (
    <div>
      <Photos style={style} />
      <Details product={product} allStyles={allStyles} style={style} reviews={reviews} setStyle={setStyle} />
      <Summary product={product} />
    </div>
  )
}

export default ProductDetail;