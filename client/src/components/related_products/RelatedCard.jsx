import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Comparing from './Comparing.jsx'
import StarDisplay from '../ratings/star_rating/Star_Display.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons'
const RelatedCard = ({id, obj, changeId, product, style}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='relatedCardDiv'>
      <div className='cardTop'>
        <FontAwesomeIcon className='BTN' icon={faStar} onClick={()=> {openModal()}} />
        <Comparing isModalOpen={isModalOpen} closeModal={closeModal} relatedProduct={obj} mainProduct={product} style={style}/>
        {obj.url ? <img onClick={()=>{changeId(obj.id)}}alt={`product image of ${obj.name}`} width='50px'src={obj.url} />: <img onClick={()=>{changeId(obj.id)}}/>}
      </div>
      <div className='cardBottom' onClick={()=>{changeId(id)}}>
        <span className='cardCategory'>{obj.category}</span>
        <span className='cardName'>{obj.name}</span>
        {obj.sale_price ? <> <span className='prices' style={{ color:'red' }}>{obj.sale_price}</span>
        <span className='prices' style={{ textDecoration: 'line-through' }}>{obj.default_price}</span></>: <span className='prices'>{obj.default_price}</span>}
        <span className='starSpan'><StarDisplay rating={obj.stars}/></span>
      </div>
    </div>
  )
}

export default RelatedCard;