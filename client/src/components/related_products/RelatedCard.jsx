import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Comparing from './Comparing.jsx'
import StarDisplay from '../ratings/star_rating/Star_Display.jsx'

const RelatedCard = ({id, obj, changeId, product, style}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
  <div>
    <button onClick={()=> {openModal()}}>star</button>
    <Comparing isModalOpen={isModalOpen} closeModal={closeModal} relatedProduct={obj} mainProduct={product} style={style}/>
    <div className='card' onClick={()=>{changeId(id)}}style={{ display: 'flex', flexDirection: 'column' }}>
      {obj.url ? <img alt={`product image of ${obj.name}`} width='50px'src={obj.url} />: <p>No Product Image</p>}
      <span>{obj.category}</span>
      <span>{obj.name}</span>
        {obj.sale_price ? <>
                        <span style={{ color:'red' }}>{obj.sale_price}</span>
                        <span style={{ textDecoration: 'line-through' }}>{obj.default_price}</span>
                      </>: <span>{obj.default_price}</span>}
        <span>rating</span>
    </div>
  </div>
  )
}

export default RelatedCard;