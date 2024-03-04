import React from 'react';

const PhotoList = ({ list }) => {

  if (list) {
    return (
      <div>
        {list.map((photo) => {
          return (
            <img key={list.indexOf(photo)} width='30px' src={photo.url}/>
          )
        })}
      </div>
    )
  }
}

export default PhotoList;