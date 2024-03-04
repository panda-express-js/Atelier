import React , { useState, useEffect } from 'react'
import axios from 'axios'
import RelatedCard from './RelatedCard.jsx'
import RelatedCardsCarousel from './RelatedCardsCarousel.jsx'

const RelatedProducts = ({product, server, options, productIds, changeId}) => {
  //40382 has good range
  //og was 40344
  const [uniqueProductIds, setUniqueProductIds] = useState([])

  useEffect(() => {
    const idSet = new Set(productIds);
    setUniqueProductIds(Array.from(idSet));
  }, [productIds])


  return (
    <div id='relatedProductsCards'>
      <RelatedCardsCarousel uniqueProductIds={uniqueProductIds} server={server} options={options} changeId={changeId}/>
    </div>

  )
}

export default RelatedProducts;