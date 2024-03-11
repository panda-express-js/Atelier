import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ItemAdd = ({ style }) => {

  const [selectedSKU, setSelectedSKU] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  // size might be NULL

  const renderSizes = () => {
    if (style.skus) {
      let allSkus = Object.keys(style.skus);
      return allSkus.map((sku) => {
        return (
          <option key={sku} value={sku}>{style.skus[sku].size}</option>
        )
      })
    }
  }

  const renderQuantities = () => {
    if (style.skus) {
      if (style.skus[selectedSKU]) {
        let maximum = style.skus[selectedSKU].quantity;
        if (maximum > 15) {
          maximum = 15;
        }
        let quantities = [];
        for (let i = 1; i <= maximum; i++) {
          quantities.push(<option key={i}>{i}</option>);
        }
        return quantities;
      }
    }
  }
  // adding to bag
  // favoriting

  return (
    <div>
      <select className="select size" onChange={(e) => setSelectedSKU(e.target.value)}>
        <option value="">SELECT SIZE</option>
        {renderSizes()}
      </select>
      <select className="select quant">
        <option value="">-</option>
        {renderQuantities()}
      </select>
      <button className="select add">
        <span>ADD TO BAG</span>
        <FontAwesomeIcon className="plus" icon={faPlus} />
      </button>
      <button className = "select fav">
        <FontAwesomeIcon icon={faStar} />
      </button>
    </div>
  )
}

export default ItemAdd;