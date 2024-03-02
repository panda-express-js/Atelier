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

  const options = {headers: {'Authorization': `${GITHUB_APIKEY}`}};

  useEffect(()=>{
    axios.get(`${server}/products/40344`, options)
    .then((response) => {
      console.log(response.data);
      setProduct(response.data);
    })
    .catch((err) => console.log(err))
  },[]);
  // PROPS TO PASS DOWN
  // -product === current product

  //for future if need to change current product make:
  //get request function that passes down to everyones to be able to change current product?

  return (
    <div id='main-component'>
      <h1>Atelier</h1>
      <ProductDetail product={product} server={server} options={options}/>
      <RelatedProducts product={product} server={server} options={options}/>
      <QandA product={product} server={server} options={options}/>

      {/* <RatingsReviews product={product} server={server} options={options}/> */}
    </div>
  )
}

export default App;
