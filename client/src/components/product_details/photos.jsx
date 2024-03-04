import React, { useState, useEffect } from 'react';
import PhotoList from './photoList.jsx';

const Photos = ({ style }) => {

  let currentPhoto;
  const [photoIndex, setPhotoIndex] = useState(0);

  if (style.photos) {
    currentPhoto = style.photos[photoIndex].url;
  }

  return (
    <div>
      <img width='200px' src={currentPhoto} />
      <PhotoList list={style.photos}/>
    </div>
  )
}

export default Photos;