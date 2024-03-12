import React from 'react';
import ThumbImg from './ThumbImg.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PhotoView = ({photos, photo, changePhoto}) => {

  const [currentPosition, setCurrentPosition] = React.useState(0);

  //remove current photo from photosarray
  const filteredPhotos = photos.filter((photoObj) => photoObj.url !== photo);
  const rightArrow = () => {
    setCurrentPosition(currentPosition + 1);
  }
  const leftArrow = () => {
    setCurrentPosition(currentPosition - 1);
  }

  return (
    <div data-testid='pictureCarousel' className='pictureCarousel'>
      <div className='picBtnContainer'>{currentPosition === 0 ? null: <FontAwesomeIcon data-testid='lPicBtn' className='picBtn' icon={faChevronLeft} onClick={() => {leftArrow()}}/>}</div>
      <div className='picturesDiv'>
      {filteredPhotos.map((photoObj, i) => {
        if (photoObj.url !== photo && i >= currentPosition && i <= currentPosition + 3 ) {
          return <ThumbImg key={i} photoObj={photoObj} i={i} changePhoto={changePhoto}/>
        }
      })}
      </div>
      <div className='picBtnContainer'>{currentPosition >= filteredPhotos.length - 4 ? null :<FontAwesomeIcon data-testid='rPicBtn' className='picBtn' icon={faChevronRight} onClick={() => {rightArrow()}}/>}</div>
    </div>
  )
}

export default PhotoView;