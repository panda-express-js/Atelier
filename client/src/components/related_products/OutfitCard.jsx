import React, {useState, useEffect} from 'react';
import StarDisplay from '../ratings/star_rating/Star_Display.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'

const OutfitCard = ({obj, deleteOutfit, changeId}) => {

  return (
    <div className='outfitCardDiv'>
      <div className='cardTop'>
        <FontAwesomeIcon className='BTN' icon={faCircleXmark} onClick={()=> {deleteOutfit(obj.id)}}/>
        {obj.url ? <img onClick={()=>{changeId(obj.id)}}alt={`product image of ${obj.name}`} width='50px'src={obj.url} />: <img onClick={()=>{changeId(obj.id)}}/>}
      </div>
      <div className="cardBottom"  onClick={()=>{changeId(obj.id)}}>
        <span className='cardCategory'>{obj.category}</span>
        <span className='cardName'>{obj.name}</span>
        {obj.sale_price ? <> <span className='prices' style={{ color:'red' }}>{obj.sale_price}</span>
        <span className='prices' style={{ textDecoration: 'line-through' }}>{obj.default_price}</span></>: <span className='prices'>{obj.default_price}</span>}
        <span className='starSpan'><StarDisplay rating={obj.stars}/></span>
      </div>

  </div>
  )
}

export default OutfitCard;