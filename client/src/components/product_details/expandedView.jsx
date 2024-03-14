import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const ExpandedView = ({ list, currentPhoto, setExpandedView, renderArrows, changePhoto}) => {

  const [photoList, setPhotoList] = useState(list);
  const [zoomStatus, setZoomStatus] = useState(false);

  const expandOrZoom = () => {
    if (zoomStatus === false) {
      return (
        <div data-testid="expandedContainer" className="expandedContainer">
          <div className="expIcons">
            {renderIcons()}
          </div>
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

  const renderIcons = () => {
    return photoList.map((photo, index) => {
      if (photo.url === currentPhoto) {
        return (
          <FontAwesomeIcon key={photo.url} className="selectedIcon" icon={faCircle} />
        )
      } else {
        return (
          <FontAwesomeIcon key={photo.url} onClick={() => changePhoto(index)} icon={faCircle} />
        )
      }
    })
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