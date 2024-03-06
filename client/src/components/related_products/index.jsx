import React , { useState, useEffect } from 'react'
import axios from 'axios'
import RelatedCardsCarousel from './RelatedCardsCarousel.jsx'
import OutfitCardsCarousel from './OutfitCardsCarousel.jsx'

const RelatedProducts = ({product, server, options, productIds, changeId, style}) => {
  //40382 has good range
  //og was 40344
  const [uniqueProductIds, setUniqueProductIds] = useState([])

  useEffect(() => {
    const arr = productIds.reduce((acc, id) => {
      if (!acc.includes(id) && id !== product.id) {
        return acc.concat(id);
      }
      return acc;
    }, []);
    setUniqueProductIds(arr);
  }, [productIds])

  return (
    <div id='carousels'>
      <h6>RELATED PRODUCTS</h6>
      <div id='relatedProductsCarousel'>
        <RelatedCardsCarousel uniqueProductIds={uniqueProductIds} server={server} options={options} changeId={changeId} product={product} style={style} />
      </div>
      <h6>YOUR OUTFIT</h6>
      <div id='outfirProductCarousel'>
        <OutfitCardsCarousel product={product} style={style}/>
      </div>
    </div>
  )
}

export default RelatedProducts;