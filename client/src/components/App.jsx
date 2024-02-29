import React from 'react';
import ProductDetail from './product_details/index.jsx';
import RelatedProducts from './related_products/index.jsx';
import RatingsReviews from './ratings/Index.jsx';
import QandA from './questionsAndAnswers/index.jsx';


const App = () => {


  return (
    <div id='main-component'>
      <ProductDetail />
      <RelatedProducts />
      <QandA />
      <RatingsReviews />
    </div>
  )
}

export default App;
