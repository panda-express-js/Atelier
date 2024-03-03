import React, {useState, useEffect} from 'react'
import RelatedCard from './RelatedCard.jsx'
import axios from 'axios'
const RelatedCardsCarousel = ({uniqueProductIds, server, options}) => {

  const [currentPosition, setCurrentPosition] = useState(0);
  const [productList, setProductList] = useState([])

  useEffect(() => {
    uniqueProductIds.forEach((id) => {
      var obj = {}
      axios.get(`${server}/products/${id}`, options)
      .then((result) => {
        obj = result.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        axios.get(`${server}/products/${id}/styles`, options)
        .then((result) => {
          obj.url = result.data.results[0].photos[0].url;
          obj.sale_price = result.data.results[0].sale_price;
          setProductList(prevList => [...prevList, obj]);
        })
        .catch((err) => {
          console.log(err)
        })
    })
  })
  }, [uniqueProductIds])

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
      {productList.map((obj, index) => {
        if (index >= currentPosition && index <= currentPosition + 3) {
          return <RelatedCard key={obj.id} id={obj.id} obj={obj}/>
        } else {
          return null;
        }
      })}
    </div>
    <div>{currentPosition === uniqueProductIds.length - 4 ? null :<button onClick={() => {rightArrow()}}>{'>'}</button>}</div>
    </div>
  )
}
//    {/*<button onClick={() => {leftArrow()}}></button>*/}
//{/*<button onClick={() => {rightArrow()}}></button>*/}
export default RelatedCardsCarousel;