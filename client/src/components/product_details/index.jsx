import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetail = ({ product, server, options }) => {
  let endpoint = (`${server}/products/${product.id}/styles`);

  const [allStyles, setAllStyles] = useState([]);
  const [style, setStyle] = useState({});

  useEffect(() => {
    axios.get(endpoint, options)
    .then((response) => {
      console.log('response:', response.data.results);
      setAllStyles(response.data.results);
      setStyle(response.data.results[0]);
    })
  }, [product])

  return (
    <div>
    </div>
  )
}

export default ProductDetail;
