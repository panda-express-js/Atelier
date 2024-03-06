import React from 'react';
import StyleSelector from './styleSelect.jsx';
import ItemAdd from './itemAdd.jsx';

const Details = ({ product, allStyles, style, setStyle }) => {

  let price = style.sale_price || style.original_price;

  const renderPrice = () => {
    if (price === style.sale_price) {
      return (
        <span style={{ color: 'red' }}>{price}
          <span style={{ color: 'black', textDecoration: 'line-through' }}>{style.original_price}</span>
        </span>
      )
    } else {
      return (
        <span>{price}</span>
      )
    }
  }

  return (
    <div id="detailContainer">
      <div>
        star rating here
      </div>
      <div>{product.category}</div>
      <div>{product.name}</div>
      <div>{renderPrice()}</div>
      <StyleSelector allStyles={allStyles} style={style} setStyle={setStyle}/>
      <ItemAdd style={style}/>
    </div>
  )
}

export default Details;