import React , { useState, useEffect } from 'react'
import axios from 'axios'
import RelatedCardsCarousel from './RelatedCardsCarousel.jsx'
import OutfitCardsCarousel from './OutfitCardsCarousel.jsx'

const RelatedProducts = ({product, server, options, productIds, changeId, style}) => {
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
      axios.get(`${server}/reviews/meta/?product_id=${product.id}`, options)
      .then((result) => {
        setReviews(result.data)
      })
      .catch((err) => {
        console.log('err', err)
      })
    }
  }, [productIds])

  return (
    <div id='carousels'>
      <h6>RELATED PRODUCTS</h6>
      <div id='relatedProductsCarousel'>
        <RelatedCardsCarousel uniqueProductIds={uniqueProductIds} server={server} options={options} changeId={changeId} product={product} style={style} />
      </div>
      <h6>YOUR OUTFIT</h6>
      <div id='outfitProductCarousel'>
        <OutfitCardsCarousel product={product} style={style} changeId={changeId} reviews={reviews}/>
      </div>
    </div>
  )
}

export default RelatedProducts;