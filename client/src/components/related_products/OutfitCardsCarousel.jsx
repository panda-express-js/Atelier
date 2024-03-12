import React, {useState, useEffect} from 'react';
import OutfitCard from './OutfitCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

const OutfitCardsCarousel = ({product, style, changeId, avgRating}) => {
  const [outfit, setOutfit] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const storedOutfit = localStorage.getItem('userOutfit');
    if (storedOutfit) {
      let outfits = JSON.parse(storedOutfit)
      setOutfit(outfits);
    }
  }, [product]);
  //update storage and rerender
  const addToOutift = () => {
    if(!outfit.some((outfitObj) => outfitObj.id === product.id)) {
      const newOutfitObj = {
        id: product.id,
        name: product.name,
        category: product.category,
        default_price: product.default_price,
        features: product.features,
        photosArray: style.photos,
        sale_price: style.sale_price,
        stars: avgRating
      };
      setOutfit((prevOutfit) => [newOutfitObj, ...prevOutfit]);
      localStorage.setItem('userOutfit', JSON.stringify([newOutfitObj, ...outfit]));
    }
  }
  const deleteOutfit = (id) => {
    var newOutfit = outfit.filter((obj) => obj.id !== id);
    setOutfit(newOutfit);
    localStorage.setItem('userOutfit', JSON.stringify(newOutfit))
  }

  const rightArrow = () => {
    setCurrentPosition(currentPosition + 1);
  }

  const leftArrow = () => {
    setCurrentPosition(currentPosition - 1);
  }

  return (
    <div className='outfitCarousel' data-testid='outfitCarousel'>
      <div data-testid='carBtnContainerBack' className='carBtnContainer'>
        {currentPosition === 0 ? null: <FontAwesomeIcon data-testid='carBtnBack' className='carBtn' icon={faChevronLeft} onClick={() => {leftArrow()}}/>}
      </div>
      <div className='outfitCardsDiv' data-testid='outfitCardsDiv'>
      <div className='outfitBtnContainer' data-testid='outfitBtnContainer'>
      <button className='outfitBtn' onClick={()=>{addToOutift()}}><FontAwesomeIcon icon={faPlus} size='lg' />Add To Outift</button>
      </div>
        {outfit.map((obj, index) => {
          if (index >= currentPosition && index <= currentPosition + 2) {
            return <OutfitCard key={obj.id} deleteOutfit={deleteOutfit} obj={obj} changeId={changeId} />
          } else {
            return null;
          }
        })}
      </div>
      <div data-testid='carBtnContainerNext' className='carBtnContainer'>
        {currentPosition >= outfit.length - 3 ? null :<FontAwesomeIcon data-testid='carBtnNext' className='carBtn' icon={faChevronRight} onClick={() => {rightArrow()}}/>}
      </div>
    </div>
  )
}

export default OutfitCardsCarousel;