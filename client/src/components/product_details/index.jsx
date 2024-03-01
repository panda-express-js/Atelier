import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from './photos.jsx';
import Details from './details.jsx';
import Summary from './summary.jsx';

const ProductDetail = ({ product, server, options }) => {
  let endpoint = (`${server}/products/${product.id}/styles`);

  const [allStyles, setAllStyles] = useState([]);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (product) {
      axios.get(endpoint, options)
      .then((response) => {
        console.log('response:', response.data.results);
        setAllStyles(response.data.results);
        setStyle(response.data.results[0]);
      })
    }
  }, [product])

  return (
    <div>
      <Photos style={style} />
      <Details style={style} />
      <Summary product={product} />
    </div>
  )
}

export default ProductDetail;