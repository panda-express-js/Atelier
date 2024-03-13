import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const ExpandedView = ({currentPhoto, setExpandedView, renderArrows}) => {

  const [zoomStatus, setZoomStatus] = useState(false);

  const expandOrZoom = () => {
    if (zoomStatus === false) {
      return (
        <div data-testid="expandedContainer" className="expandedContainer">
          <img src={currentPhoto} data-testid="expandedPhoto" className="expandedPhoto" onClick={() => setZoomStatus(true)} />
          <button data-testid="closeExpanded" className="closeExpanded" onClick={() => setExpandedView(false)}>X</button>
          <div className="expArrows">
            {renderArrows()}
          </div>
        </div>
      )
    } else {
      return (
        <div data-testid="zoomedContainer" className="zoomedContainer">
          <div data-testid="zPC" className="zoomedPhotoContainer" style={{ backgroundImage: `url(${currentPhoto})`}} onMouseMove={(e) => {moveAround(e)}} onClick={() => setZoomStatus(false)} >
            <img src={currentPhoto} className="zoomedPhoto" />
          </div>
        </div>
      )
    }
  }

  const moveAround = (e) => {
    let zoomedPhotoContainer = document.querySelector('.zoomedPhotoContainer');
    zoomedPhotoContainer.style.backgroundPositionX = (-e.nativeEvent.offsetX * 1.5) + "px";
    zoomedPhotoContainer.style.backgroundPositionY = (-e.nativeEvent.offsetY * 1.5) + "px";
  }

  return (
    <div>
      {expandOrZoom()}
    </div>
  )
}

export default ExpandedView;