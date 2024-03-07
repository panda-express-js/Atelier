import React, { useState, useEffect } from 'react';
import PhotoList from './photoList.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faExpand } from '@fortawesome/free-solid-svg-icons';


const Photos = ({ style }) => {

  let currentPhoto;
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoList, setPhotoList] = useState([]);

  if (style.photos) {
    currentPhoto = style.photos[photoIndex].url;
  }

  const changePhoto = (newIndex) => {
    if (newIndex > style.photos.length - 1) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = style.photos.length - 1;
    }
    setPhotoIndex(newIndex);
  }

  return (
    <div id="photoContainer">
      <FontAwesomeIcon onClick={() => changePhoto(photoIndex - 1)} className="photoIcon leftArrow" icon={faArrowLeft} />
      <div className="currentPhoto">
        <img src={currentPhoto} />
      </div>
      <FontAwesomeIcon onClick={() => changePhoto(photoIndex + 1)} className="photoIcon rightArrow" icon={faArrowRight} />
      <FontAwesomeIcon className="photoIcon photoExpand" icon={faExpand} />
      <PhotoList list={style.photos} changePhoto={changePhoto} photoIndex={photoIndex}/>
    </div>
  )
}

export default Photos;