import React, { useState, useEffect } from 'react';
import PhotoList from './photoList.jsx';
import ExpandedView from './expandedView.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faExpand } from '@fortawesome/free-solid-svg-icons';

const Photos = ({ style }) => {

  let currentPhoto;
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoList, setPhotoList] = useState([]);
  const [expandedView, setExpandedView] = useState(false);

  if (style.photos) {
    if (style.photos[photoIndex] === undefined) {
      setPhotoIndex(0);
    } else {
      currentPhoto = style.photos[photoIndex].url;
      if (currentPhoto === null) {
        currentPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/256px-No-Image-Placeholder.svg.png";
      }
    }
  }

  const changePhoto = (newIndex) => {
    if (newIndex > style.photos.length - 1) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = style.photos.length - 1;
    }
    setPhotoIndex(newIndex);
  }

  const renderArrows = () => {
    if (photoIndex === 0) {
      return (
        <FontAwesomeIcon data-testid="rightArrow" onClick={() => changePhoto(photoIndex + 1)} className="photoIcon rightArrow" icon={faArrowRight} />
      )
    } else if (photoIndex === style.photos.length - 1) {
      return (
        <FontAwesomeIcon data-testid="leftArrow" onClick={() => changePhoto(photoIndex - 1)} className="photoIcon leftArrow" icon={faArrowLeft} />
      )
    } else {
      return (
        <div>
          <FontAwesomeIcon data-testid="leftArrow" onClick={() => changePhoto(photoIndex - 1)} className="photoIcon leftArrow" icon={faArrowLeft} />
          <FontAwesomeIcon data-testid="rightArrow" onClick={() => changePhoto(photoIndex + 1)} className="photoIcon rightArrow" icon={faArrowRight} />
        </div>
      )
    }
  }

  const openExpanded = (e) => {
    if (e.target.id === "photoContainer" || e.target.className === "mainImg" || e.target.className === "currentPhoto" || e.target.id === "photoExpand") {
      setExpandedView(true);
    }
  }

  const checkExpanded = () => {
    if (expandedView === true) {
      return (
        <ExpandedView currentPhoto={currentPhoto} setExpandedView={setExpandedView} list={photoList} photoIndex={photoIndex} changePhoto={changePhoto} renderArrows={renderArrows}/>
      )
    }
  }

  return (
    <div data-testid="photoContainer" id="photoContainer" onClick={(e) => openExpanded(e)}>
      <div className="currentPhoto">
        <img className="mainImg" src={currentPhoto} onClick={(e) => openExpanded(e)}/>
      </div>
      <FontAwesomeIcon className="photoIcon" id="photoExpand" icon={faExpand} />
      <PhotoList list={style.photos} changePhoto={changePhoto} photoIndex={photoIndex} />
      {renderArrows()}
      {checkExpanded()}
    </div>
  )
}

export default Photos;