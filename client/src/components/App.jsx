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
  const [meta, setMeta] = useState({});
  const [avgRating, setAvgRating] = useState(0);

  const server = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp";

  const options = {headers: {'Authorization': `${GITHUB_APIKEY}`}};

  useEffect(()=>{
    //Promise.all takes an array of promises
    //returns an array of the data once all input promises are complete
    Promise.all([
      axios.get(`${server}/products/${id}`, options),
      axios.get(`${server}/products/${id}/styles`, options),
      axios.get(`${server}/products/${id}/related`, options),
      axios.get(`${server}/reviews/meta/?product_id=${id}`, options)
    ])
    .then(([productResponse, stylesResponse, relatedResponse, metaResponse]) => {
      setProduct(productResponse.data);
      setAllStyles(stylesResponse.data.results);
      //gets object in results array that has default? set to true
      var stylesArray = stylesResponse.data.results;
      var defaultStyle = stylesArray.find((style) => style['default?']) || stylesArray[0];
      setStyle(defaultStyle);
      setProductIds(relatedResponse.data);
      //Meta object and avg rating states
      setMeta(metaResponse.data);
      setAvgRating(getAverageRatingFromMeta(metaResponse.data))
    })
    .catch((err) => {
      console.log(err, 'App component use effect error');
    });
  }, [id]);
  //function to get average rating for main product
  const getAverageRatingFromMeta = (metaObj) => {
    var ratingsObj = metaObj.ratings;
    var totalVotes = 0;
    var totalStars = 0;
    for (var key in ratingsObj) {
      totalVotes += parseInt(ratingsObj[key]);
      totalStars += (parseInt(ratingsObj[key]) * key);
    }
    var averageRating = totalStars / totalVotes;
    return averageRating;
  }

  //function changes id State, which is watched by useEffect, and rerenders for the new product
  const changeId = (newId) => {
    if (id !== newId) {
      setId(newId);
    }
  }

  return (
    <div id='main-component'>
      <h1>Atelier</h1>
      <ProductDetail product={product} server={server} options={options} allStyles={allStyles} style={style} reviews={reviews} setStyle={setStyle} avgRating={avgRating}/>
      <RelatedProducts product={product} server={server} options={options} productIds={productIds} changeId={changeId} style={style} reviews={reviews} avgRating={avgRating}/>
      <QandA server={server} options={options} product={product} />
      { function() { if(product.id) {return <RatingsReviews server={server} options={options} product={product} reviews={reviews} meta={meta} avgRating={avgRating} setReviews={setReviews}/>}}()}
    </div>
  )
}

export default App;
