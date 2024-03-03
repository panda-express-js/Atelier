import React , { useState, useEffect } from 'react'
import axios from 'axios'
import RelatedCard from './RelatedCard.jsx'
import RelatedCardsCarousel from './RelatedCardsCarousel.jsx'

const RelatedProducts = ({product, server, options, productIds, style}) => {

  const [uniqueProductIds, setUniqueProductIds] = useState([])

  useEffect(() => {
    const idSet = new Set(productIds);
    setUniqueProductIds(Array.from(idSet));
  }, [productIds])


  return (
    <div id='relatedProductsCards'>
      <RelatedCardsCarousel uniqueProductIds={uniqueProductIds} server={server} options={options}/>
    </div>

  )
}

export default RelatedProducts;