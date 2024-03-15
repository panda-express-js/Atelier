import React , { useState, useEffect } from 'react';
import ProductDetail from './product_details/index.jsx';
import RelatedProducts from './related_products/index.jsx';
import RatingsReviews from './ratings/Index.jsx';
import QandA from './questionsAndAnswers/index.jsx';
import axios from 'axios';
import './styles.css';

  //function to get average rating for main product
  export const getAverageRatingFromMeta = (metaObj) => {
    const ratingsObj = metaObj.ratings;
    let totalVotes = 0;
    let totalStars = 0;
    for (let key in ratingsObj) {
      totalVotes += parseInt(ratingsObj[key]);
      totalStars += (parseInt(ratingsObj[key]) * key);
    }
    const averageRating = totalStars / totalVotes;
    return averageRating;
  }

const App = () => {

  const [id, setId] = useState('40346');

  const [product, setProduct] = useState({});
  const [productIds, setProductIds] = useState([])
  const [allStyles, setAllStyles] = useState([]);
  const [style, setStyle] = useState({});
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState({});
  const [avgRating, setAvgRating] = useState(0);
  const [questions, setQuestions] = useState([]);

  const server = "api";
  const options = '';
  useEffect(()=>{
    //Promise.all takes an array of promises
    //returns an array of the data once all input promises are complete
    Promise.all([
      axios.get(`${server}/products/${id}`, options),
      axios.get(`${server}/products/${id}/styles`, options),
      axios.get(`${server}/products/${id}/related`, options),
      axios.get(`${server}/reviews/meta/?product_id=${id}`, options),
      axios.get(`${server}/qa/questions?product_id=${id}&page=1&count=30`, options)
    ])
    .then(([productResponse, stylesResponse, relatedResponse, metaResponse, questionsResponse]) => {
      setProduct(productResponse.data);
      setAllStyles(stylesResponse.data.results);
      //gets object in results array that has default? set to true
      const stylesArray = stylesResponse.data.results;
      const defaultStyle = stylesArray.find((style) => style['default?']) || stylesArray[0];
      setStyle(defaultStyle);
      setProductIds(relatedResponse.data);
      //Meta object and avg rating states
      setMeta(metaResponse.data);
      setAvgRating(getAverageRatingFromMeta(metaResponse.data))
      setQuestions(questionsResponse.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [id]);

  //function changes id State, which is watched by useEffect, and rerenders for the new product
  const changeId = (newId) => {
    if (id !== newId) {
      setId(newId);
    }
  }

  return (
    <div data-testid="main-component" id='main-component'>
      <h1>Atelier</h1>
      <ProductDetail product={product} server={server} options={options} allStyles={allStyles} style={style} reviews={reviews} setStyle={setStyle} avgRating={avgRating}/>
      <RelatedProducts avgRating={avgRating} changeId={changeId} options={options} product={product} productIds={productIds} server={server} style={style}/>
      <QandA server={server} options={options} product={product} questions={questions}/>
      { function() { if(product.id) {return <RatingsReviews server={server} options={options} product={product} reviews={reviews} meta={meta} avgRating={avgRating} setReviews={setReviews}/>}}()}
    </div>
  )
}

export default App;

