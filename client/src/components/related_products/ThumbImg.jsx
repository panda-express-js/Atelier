import React from 'react';

const ThumbImg = ({photoObj, i, changePhoto}) => {
  return (
    <img src={photoObj.thumbnail_url} onClick={()=> {changePhoto(photoObj.url)}}/>
  )
}

export default ThumbImg;