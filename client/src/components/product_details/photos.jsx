import React, { useState, useEffect } from 'react';
import PhotoList from './photoList.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faExpand, faV } from '@fortawesome/free-solid-svg-icons';


const Photos = ({ style }) => {

  let currentPhoto;
  const [photoIndex, setPhotoIndex] = useState(0);

  if (style.photos) {
    currentPhoto = style.photos[photoIndex].url;
  }

  const photoRight = () => {
    if (photoIndex === style.photos.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  }

  const photoLeft = () => {
    if (photoIndex === 0) {
      setPhotoIndex(style.photos.length - 1);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  }

  return (
    <div id="photoContainer">
      <FontAwesomeIcon className="photoIcon photoV" icon={faV} />
      <FontAwesomeIcon onClick={photoLeft} className="photoIcon leftArrow" icon={faArrowLeft} />
      <img className="currentPhoto" width='200px' src={currentPhoto} />
      <FontAwesomeIcon onClick={photoRight} className="photoIcon rightArrow" icon={faArrowRight} />
      <FontAwesomeIcon className="photoIcon photoExpand" icon={faExpand} />
      <PhotoList list={style.photos}/>
    </div>
  )
}

export default Photos;