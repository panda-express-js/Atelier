import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Summary = ({ product }) => {

  const renderFeatures = () => {
    if (product.features) {
      return product.features.map((feat) => {
        return (
          <div key={feat.value + feat.feature}>
            <FontAwesomeIcon icon={faCheck} className="checkmark"/>
            {feat.value} {feat.feature}
          </div>
        )
      })
    }
  }

  return (
    <div>
      <div className="sloganDesc">
        <div>{product.slogan}</div>
        <div>{product.description}</div>
      </div>
      <div className="features">
        {renderFeatures()}
      </div>
    </div>
  )
}

export default Summary;