import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';

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

  const share = () => {
    console.log('sharing to social media');
  }

  return (
    <div id="summaryContainer">
      <div className="sloganDesc">
        <div className="slogan" style={{fontSize: "16px"}}><strong>{product.slogan}</strong></div>
        <div className="desc">{product.description}</div>
      </div>
      <div className="features">
        {renderFeatures()}
      </div>
      <div className="share">
        <div>Share: </div>
        <a href="https://www.facebook.com" className="shareBtn">
          <FontAwesomeIcon icon={faFacebookF} onClick={share}/>
        </a>
        <a href="https://www.twitter.com" className="shareBtn">
          <FontAwesomeIcon icon={faXTwitter} onClick={share}/>
        </a>
        <a href="https://www.pinterest.com" className="shareBtn">
          <FontAwesomeIcon icon={faPinterestP} onClick={share}/>
        </a>
      </div>
    </div>
  )
}

export default Summary;