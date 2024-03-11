import React from 'react';
import ThumbImg from './ThumbImg.jsx'
const PhotoView = ({photos, photo, changePhoto}) => {

  const [currentPosition, setCurrentPosition] = React.useState(0);

  //remove current photo from photosarray
  console.log(photos)
  const filteredPhotos = photos.filter((photoObj) => photoObj.url !== photo);
  console.log(filteredPhotos)
  const rightArrow = () => {
    setCurrentPosition(currentPosition + 1);
  }
  const leftArrow = () => {
    setCurrentPosition(currentPosition - 1);
  }

  return (
    <div className='pictureCarousel'>
      <div>{currentPosition === 0 ? null: <button className='picBtn' onClick={() => {leftArrow()}}>{'<'}</button>}</div>
      {filteredPhotos.map((photoObj, i) => {
        if (photoObj.url !== photo && i >= currentPosition && i <= currentPosition + 3 ) {
          return <ThumbImg key={i} photoObj={photoObj} i={i} changePhoto={changePhoto}/>
        }
      })}
      <div>{currentPosition >= filteredPhotos.length - 4 ? null :<button className='picBtn' onClick={() => {rightArrow()}}>{'>'}</button>}</div>
    </div>
  )
}

export default PhotoView;