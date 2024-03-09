import React from 'react';

const ExpandedView = ({currentPhoto, setExpandedView, renderArrows}) => {

  return (
    <div className="expandedContainer">
      <img className="expandedPhoto" src={currentPhoto} />
      <button className="closeExpanded" onClick={() => setExpandedView(false)}>X</button>
      <div className="expArrows">
        {renderArrows()}
      </div>
    </div>
  )
}

export default ExpandedView;