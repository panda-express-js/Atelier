import React , { useState, useEffect } from 'react'
import axios from 'axios'
import RelatedCardsCarousel from './RelatedCardsCarousel.jsx'
import OutfitCardsCarousel from './OutfitCardsCarousel.jsx'

const RelatedProducts = ({product, server, options, productIds, changeId}) => {
  //40382 has good range
  //og was 40344
  const [uniqueProductIds, setUniqueProductIds] = useState([])

  useEffect(() => {
    const idSet = new Set(productIds);
    setUniqueProductIds(Array.from(idSet));
  }, [productIds])

  //react-modal for the pop up comparison window. dependency
  return (
    <div id='carousels'>
      <div id='relatedProductsCarousel'>
        <RelatedCardsCarousel uniqueProductIds={uniqueProductIds} server={server} options={options} changeId={changeId}/>
      </div>
      <div id='outfirProductCarousel'>
        <OutfitCardsCarousel />
      </div>
    </div>
  )
}

export default RelatedProducts;