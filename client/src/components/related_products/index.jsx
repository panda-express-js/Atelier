import React , { useState, useEffect } from 'react'
import axios from 'axios'
import RelatedCardsCarousel from './RelatedCardsCarousel.jsx'
import OutfitCardsCarousel from './OutfitCardsCarousel.jsx'
import './relatedProducts.css';
const RelatedProducts = ({product, server, options, productIds, changeId, style, avgRating}) => {
  //40382 has good range
  //og was 40344
  const [uniqueProductIds, setUniqueProductIds] = useState([])
  const [reviews, setReviews] = useState({})

  useEffect(() => {
    const arr = productIds.reduce((acc, id) => {
      if (!acc.includes(id) && id !== product.id) {
        return acc.concat(id);
      }
      return acc;
    }, []);
    if (product.id !== undefined) {
      setUniqueProductIds(arr);
    }
  }, [productIds])

  return (
    <div className='carousels'>
      <h6 className='rHeader'>RELATED PRODUCTS</h6>
        <RelatedCardsCarousel uniqueProductIds={uniqueProductIds} server={server} options={options} changeId={changeId} product={product} style={style} />
      <h6 className='oHeader'>YOUR OUTFIT</h6>
        <OutfitCardsCarousel product={product} style={style} changeId={changeId} avgRating={avgRating}/>
    </div>
  )
}

export default RelatedProducts;