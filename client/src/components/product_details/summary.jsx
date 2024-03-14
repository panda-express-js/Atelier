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

  const link = encodeURI(window.location.href);
  const msg = encodeURIComponent("Check out this cool item:");
  const fbHref = `https://www.facebook.com/share.php?u=${link}`;
  const twitterHref = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=Atelier`;

  return (
    <div id="summaryContainer">
      <div className="sloganDesc">
        <div className="slogan"><strong>{product.slogan}</strong></div>
        <div className="desc">{product.description}</div>
      </div>
      <div className="features">
        {renderFeatures()}
      </div>
      <div className="share">
        <div>Share: </div>
        <a href={fbHref} className="facebook">
          <FontAwesomeIcon icon={faFacebookF} onClick={share}/>
        </a>
        <a href={twitterHref} className="twitter">
          <FontAwesomeIcon icon={faXTwitter} onClick={share}/>
        </a>
        <a href="https://www.pinterest.com" className="pinterest">
          <FontAwesomeIcon icon={faPinterestP} onClick={share}/>
        </a>
      </div>
    </div>
  )
}

export default Summary;