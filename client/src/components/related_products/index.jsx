import React , { useState, useEffect } from 'react'
import axios from 'axios'
import RelatedCardsCarousel from './RelatedCardsCarousel.jsx'
import OutfitCardsCarousel from './OutfitCardsCarousel.jsx'
import './relatedProducts.css';
const RelatedProducts = ({avgRating, changeId, options, product, productIds, server, style}) => {

  const [uniqueProductIds, setUniqueProductIds] = useState([])
  //set state with unique ids(remove duplicates and current product)
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

  if (style !== undefined) {
    return (
      <div className='carousels' data-testid="carousels">
        <p className='rHeader'>RELATED PRODUCTS</p>
        <RelatedCardsCarousel avgRating={avgRating} changeId={changeId} options={options}  product={product} server={server}  style={style} uniqueProductIds={uniqueProductIds}/>
        <p className='oHeader'>YOUR OUTFIT</p>
        <OutfitCardsCarousel avgRating={avgRating} changeId={changeId} product={product} style={style}/>
      </div>
    );
  } else {
    return null;
  }
}

export default RelatedProducts;