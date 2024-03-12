import React, { useState } from 'react';

const ExpandedView = ({currentPhoto, setExpandedView, renderArrows}) => {

  const [zoomStatus, setZoomStatus] = useState(false);

  const expandOrZoom = () => {
    if (zoomStatus === false) {
      return (
        <div data-testid="expandedContainer" className="expandedContainer">
          <div className="expandedPhoto" style={{ backgroundImage: `url(${currentPhoto})`}}>
          </div>
          <button data-testid="closeExpanded" className="closeExpanded" onClick={() => setExpandedView(false)}>X</button>
          <div className="expArrows">
            {renderArrows()}
          </div>
        </div>
      )
    } else {
      return (
        <div className="expandedContainer">
          <div className="zoomContainer" style={{ backgroundImage: `url(${currentPhoto})`}}>
            <img className="zoomedPhoto" src={currentPhoto} onClick={() => setZoomStatus(false)}/>
          </div>
        </div>
      )
    }
  }

  // create conditional to check if in zoom

  // if yes, add event listener on mouseover

  // set backgroundPositionX and backgroundPositionY

  // const zoomIn = () => {
  //   let container = document.querySelector('.expandedContainer');
  //   // change background to currentPhoto
  //   container.style.backgroundImage = `url(${currentPhoto})`;
  //   // on click should close zoomed in view
  //   container.addEventListener("click", () => {
  //     console.log('clicking on zoomed photo');
  //     container.classList.add("zoomActive");
  //   })
  // }

  return (
    <div>
      {expandOrZoom()}
    </div>
  )
}

export default ExpandedView;