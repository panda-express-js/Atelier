import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const PhotoList = ({ list, changePhoto, photoIndex }) => {

  const [limitedList, setLimitedList] = useState([]);

  const handlePhotoClick = (newIndex) => {
    changePhoto(newIndex);
  }

  useEffect(() => {
    if (list) {
      if (list.length - photoIndex < 5) {
        setLimitedList(list.slice(-5))
      } else {
        setLimitedList(list.slice(photoIndex, photoIndex + 5));
      }
    }
  }, [list, photoIndex])


  const renderList = () => {
    console.log('list:', list);
    console.log('limited:', limitedList);
    return limitedList.map((photo) => {
      if (list.indexOf(photo) === photoIndex) {
        return (
          <div key={photo.url} className="selectedListPhoto" style={{marginBottom: "8px"}}>
            <img onClick={(e) => handlePhotoClick(list.indexOf(photo))} className="listPhoto" src={photo.url}/>
            <div className="selectedListPhoto"></div>
          </div>
        )
      } else {
        return (
          <div key={photo.url} style={{marginBottom: "8px"}}>
            <img onClick={(e) => handlePhotoClick(list.indexOf(photo))} className="listPhoto" src={photo.url}/>
          </div>
        )
      }
    })
  }

  const renderUpBtn = () => {
    if (limitedList && (limitedList[0] !== list[0])) {
      return (
        <FontAwesomeIcon className="photoIcon photoUp" icon={faChevronUp} onClick={() =>
          scroll(-1)}/>
      )
    }
  }

  const renderDownBtn = () => {
    if (limitedList && (limitedList[limitedList.length - 1] !== list[list.length - 1])) {
      return (
        <FontAwesomeIcon className="photoIcon photoDown" icon={faChevronDown} onClick={() => scroll(1)}/>
      )
    }
  }

  const scroll = (input) => {
    let firstThumb = list.indexOf(limitedList[0]);
    let newThumb = firstThumb + input;
    if (newThumb >= 0 && newThumb <= list.length - 1) {
      if (list.length - newThumb >= 5) {
        setLimitedList(list.slice(newThumb, newThumb + 5));
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