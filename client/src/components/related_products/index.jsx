import React , { useState, useEffect } from 'react'
import axios from 'axios'
import RelatedCard from './RelatedCard.jsx'
import RelatedCardsCarousel from './RelatedCardsCarousel.jsx'

const RelatedProducts = ({product, server, options, productIds, style}) => {
  /*
  //40344 is a good id to put in app.jsx
  put this in App.jsx!!!!!!! keeps productIds from giving duplicate ids
  var set = new Set(result.data);
  var arr = Array.from(set);
  setProductIds(arr);
  */
  /*
  useEffect(() => {
    if (product.id) {
      axios.get(`${server}/products/${product.id}/related`, options)
      .then((response) => {
        setRelatedIds(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }, [product])
*/

  return (
    <div id='relatedProductsCards'>
      <RelatedCardsCarousel productIds={productIds} server={server} options={options}/>
    </div>

  )
}

export default RelatedProducts;