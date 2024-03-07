import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const PhotoList = ({ list, changePhoto, photoIndex }) => {

  const handlePhotoClick = (newIndex) => {
    changePhoto(newIndex);
  }

  let limitedList = [];

  const renderList = () => {
    if (list.length - photoIndex < 5) {
      limitedList = list.slice(-5);
    } else {
      limitedList = list.slice(photoIndex, photoIndex + 5);
    }
    return limitedList.map((photo) => {
      if (list.indexOf(photo) === photoIndex) {
        return (
          <div key={list.indexOf(photo)} className="selectedListPhoto" style={{marginBottom: "8px"}}>
            <img onClick={(e) => handlePhotoClick(list.indexOf(photo))} className="listPhoto" src={photo.url}/>
            <div className="selectedListPhoto"></div>
          </div>
        )
      } else {
        return (
          <div key={list.indexOf(photo)} style={{marginBottom: "8px"}}>
            <img onClick={(e) => handlePhotoClick(list.indexOf(photo))} className="listPhoto" src={photo.url}/>
          </div>
        )
      }
    })
  }

  const renderUpBtn = () => {
    if (limitedList) {
      if (limitedList[0] !== list[0]) {
        return (
          <FontAwesomeIcon className="photoIcon photoUp" icon={faChevronUp} />
        )
      }
    }
  }

  const renderDownBtn = () => {
    if (limitedList) {
      if (limitedList[limitedList.length - 1] !== list[list.length - 1]) {
        return (
          <FontAwesomeIcon className="photoIcon photoDown" icon={faChevronDown} />
        )
      }
    }
  }

  if (list) {
    return (
      <div className="photoList">
        {renderList()}
        {renderUpBtn()}
        {renderDownBtn()}
      </div>
    )
  }
}

export default PhotoList;