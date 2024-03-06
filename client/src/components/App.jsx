import React , { useState, useEffect } from 'react';
import ProductDetail from './product_details/index.jsx';
import RelatedProducts from './related_products/index.jsx';
import RatingsReviews from './ratings/Index.jsx';
import QandA from './questionsAndAnswers/index.jsx';
import { GITHUB_APIKEY } from '../../../config.js';
import axios from 'axios';
import '../../../styles.css';

const App = () => {

  const [id, setId] = useState('40346');

  const [product, setProduct] = useState({});
  const [productIds, setProductIds] = useState([])
  const [allStyles, setAllStyles] = useState([]);
  const [style, setStyle] = useState({});
  const [reviews, setReviews] = useState([]);

  const server = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp";

  const options = {headers: {'Authorization': `${GITHUB_APIKEY}`}};

  useEffect(()=>{
    axios.get(`${server}/products/${id}`, options)
    .then((response) => {
      console.log(response.data);
      setProduct(response.data);
    })
    .catch((err) => {console.log(err)})
    .then(() => {
      axios.get(`${server}/products/${id}/styles`, options)
      .then((response) => {
        setAllStyles(response.data.results);
        setStyle(response.data.results[0]);
      })
      .catch((err) => {console.log(err)})
      .then(() => {
        axios.get(`${server}/products/${id}/related`, options)
        .then((result) => {
          setProductIds(result.data)
        })
        .catch((err) => {console.log(err)})
      })
    })
  }, [id]);
  // PROPS TO PASS DOWN
  // -product === current product

  //function changes id State, which is watched by useEffect, and rerenders for the new product
  const changeId = (id) => {
    console.log('click', id)
    setId(id);
  }

  return (
    <div id='main-component'>
      <h1>Atelier</h1>
      <ProductDetail product={product} server={server} options={options} allStyles={allStyles} style={style} reviews={reviews}/>
      <RelatedProducts product={product} server={server} options={options} productIds={productIds} changeId={changeId} style={style} reviews={reviews} />
      <QandA server={server} options={options} product={product} />
      { function() { if(product.id) {return <RatingsReviews server={server} options={options} product={product} reviews={reviews} setReviews={setReviews}/>}}()}
    </div>
  )
}

export default App;
