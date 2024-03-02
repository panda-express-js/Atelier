import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from './photos.jsx';
import Details from './details.jsx';
import Summary from './summary.jsx';

const ProductDetail = ({ product, server, options }) => {


  const [allStyles, setAllStyles] = useState([]);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (product.id) {
      let endpoint = `${server}/products/${product.id}/styles`;
      axios.get(endpoint, options)
      .then((response) => {
        setAllStyles(response.data.results);
        setStyle(response.data.results[0]);
      })
      .catch((err) => {
        console.log(err)
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