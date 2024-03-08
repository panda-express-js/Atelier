import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const StyleSelector = ({ allStyles, style, setStyle }) => {

  const renderThumbnails = () => {
    if (allStyles.length > 0) {
      return allStyles.map((uniqueStyle, index) => {
        if (uniqueStyle.style_id === style.style_id) {
          return (<div className="styleSelect" key={uniqueStyle.style_id}>
            <FontAwesomeIcon icon={faCheck} className="checkmark selected"/>
            <img className="selectorImg" src={uniqueStyle.photos[0].thumbnail_url} />
                 </div>
          )
        } else {
          return (<div className="styleSelect" key={uniqueStyle.style_id}>
            <img onClick={(e) => changeStyle(e)} id={index} className="selectorImg" src={uniqueStyle.photos[0].thumbnail_url} />
                 </div>
          )
        }
      })
    }
  }

  const changeStyle = (e) => {
    let index = e.target.id;
    setStyle(allStyles[index]);
  }

  return (
    <div className="styleSection">
      <div className="styleName"><strong>STYLE > </strong>{style.name}</div>
      {renderThumbnails()}
    </div>
  )
}

export default StyleSelector;