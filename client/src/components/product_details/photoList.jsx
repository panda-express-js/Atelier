import React from 'react';

const PhotoList = ({ list, changePhoto }) => {

  const handlePhotoClick = (newIndex) => {
    changePhoto(newIndex);
  }

  if (list) {
    return (
      <div>
        {list.map((photo, index) => {
          return (
            <div key={index}>
              <img onClick={(e) => handlePhotoClick(index)} className="listPhoto" src={photo.url}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default PhotoList;