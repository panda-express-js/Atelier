import React from 'react';

const ThumbImg = ({photoObj, i, changePhoto}) => {
  return (
    <div className='singlePicContainer'>
      <img src={photoObj.url} onClick={()=> {changePhoto(photoObj.url)}}/>
    </div>
  )
}

export default ThumbImg;