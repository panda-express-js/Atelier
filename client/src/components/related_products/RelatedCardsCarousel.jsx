import React, {useState} from 'react'
import RelatedCard from './RelatedCard.jsx'

const RelatedCardsCarousel = ({productIds, server, options}) => {

  const [currentPosition, setCurrentPosition] = useState(0);

  const rightArrow = (index) => {
    setCurrentPosition(currentPosition + 1);
  }
  const leftArrow = (index) => {
    setCurrentPosition(currentPosition - 1);
  }
  return (
    <div style={{ display: 'flex' }}>
    <div>{currentPosition === 0 ? null: <button onClick={() => {leftArrow()}}>{'<'}</button>}</div>
    <div style={{ display: 'flex' }}>
      {productIds.map((ID, index) => {
        if (index >= currentPosition && index <= currentPosition + 3) {
          return <RelatedCard key={ID} id={ID} server={server} options={options} />
        } else {
          return null;
        }
      })}
    </div>
    <div>{currentPosition === productIds.length - 3 ? null :<button onClick={() => {rightArrow()}}>{'>'}</button>}</div>
    </div>
  )
}
//    {/*<button onClick={() => {leftArrow()}}></button>*/}
//{/*<button onClick={() => {rightArrow()}}></button>*/}
export default RelatedCardsCarousel;