import React , { useState, useEffect } from 'react';
import ProductDetail from './product_details/index.jsx';
import RelatedProducts from './related_products/index.jsx';
import RatingsReviews from './ratings/Index.jsx';
import QandA from './questionsAndAnswers/index.jsx';
import { GITHUB_APIKEY } from '../../../config.js';
import axios from 'axios';


const App = () => {

  const [product, setProduct] = useState('');
  const server = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp";

  useEffect(()=>{
    axios.get(`${server}/products`, {headers: {'Authorization': `${GITHUB_APIKEY}`}})
    .then((response) => {
      console.log(response.data);
      setProduct(response.data);
    })
    .catch((err) => console.log(err))
  },[]);





  return (
    <div id='main-component'>
      <h1>Atelier</h1>
      <ProductDetail/>
      <RelatedProducts />
      <QandA />

      {/* <RatingsReviews /> */}
    </div>
  )
}

export default App;
