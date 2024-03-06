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
    <div id="summaryContainer">
      <div className="sloganDesc">
        <div style={{fontSize: "16px"}}><strong>{product.slogan}</strong></div>
        <div>{product.description}</div>
      </div>
      <div className="features">
        {renderFeatures()}
      </div>
    </div>
  )
}

export default Summary;