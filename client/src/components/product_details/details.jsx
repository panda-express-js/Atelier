import React from 'react';
import StyleSelector from './styleSelect.jsx';
import ItemAdd from './itemAdd.jsx';
import StarDisplay from '../ratings/star_rating/Star_Display.jsx';

const Details = ({ product, allStyles, style, setStyle, avgRating, reviews }) => {

  let salePrice = style.sale_price;
  let ogPrice = style.original_price;
  if (salePrice && salePrice.split('').slice(-2).join('') === '00') {
    salePrice = salePrice.split('').slice(0, -3).join('');
  }
  if (ogPrice && ogPrice.split('').slice(-2).join('') === '00') {
    ogPrice = ogPrice.split('').slice(0, -3).join('');
  }

  let price = salePrice || ogPrice;

  let category;
  if (product.category) {
    category = product.category.toUpperCase();
  }

  const renderPrice = () => {
    if (style.sale_price) {
      return (
        <span style={{ color: 'red' }}>{price}
          <span style={{ color: 'black', textDecoration: 'line-through' }}>{ogPrice}</span>
        </span>
      )
    } else {
      return (
        <span>{price}</span>
      )
    }
  }

  const renderRatingInfo = () => {
    if (avgRating && reviews.count > 0) {
      return (
        <div className="detailStars">
          <StarDisplay rating={avgRating} />
          <a href="#Ratings & Reviews" className="readReviews">Read all {reviews.count} reviews</a>
        </div>
      )
    }
  }

  return (
    <div id="detailContainer">
      <div>
        {renderRatingInfo()}
        <div className="prodCat">{category}</div>
        <div className="prodName">{product.name}</div>
        <div className="prodPrice">${renderPrice()}</div>
      </div>
      <StyleSelector allStyles={allStyles} style={style} setStyle={setStyle}/>
      <ItemAdd style={style}/>
    </div>
  )
}

export default Details;