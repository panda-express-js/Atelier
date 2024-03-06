import React, {useState, useEffect} from 'react';
import OutfitCard from './OutfitCard.jsx';

const OutfitCardsCarousel = ({product, style}) => {
  const [outfit, setOutfit] = useState([{id: 1}, {id: 2}, {id: 3}, {id:4}, {id:5}]);
  const [isAdded, setIsAdded] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

  const addToOutift = () => {

  }
  const rightArrow = () => {
    setCurrentPosition(currentPosition + 1);
  }

  const leftArrow = () => {
    setCurrentPosition(currentPosition - 1);
  }
  return (
    <div style={{ display: 'flex' }}>
    <div>{currentPosition === 0 ? null: <button onClick={() => {leftArrow()}}>{'<'}</button>}</div>
    <button>+ icon Add To Outift</button>
    <div style={{ display: 'flex' }}>
      {outfit.map((obj, index) => {
        if (index >= currentPosition && index <= currentPosition + 2) {
          return <OutfitCard key={obj.id} id={obj.id} obj={obj} />
        } else {
          return null;
        }
      })}
    </div>
    <div>{currentPosition >= outfit.length - 3 ? null :<button onClick={() => {rightArrow()}}>{'>'}</button>}</div>
    </div>
  )
}

export default OutfitCardsCarousel;