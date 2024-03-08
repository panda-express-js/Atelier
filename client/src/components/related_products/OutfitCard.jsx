import React, {useState, useEffect} from 'react';
import StarDisplay from '../ratings/star_rating/Star_Display.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'

const OutfitCard = ({obj, deleteOutfit, changeId}) => {

  return (
    <div>
    <FontAwesomeIcon icon={faCircleXmark} onClick={()=> {deleteOutfit(obj.id)}}/>
    <div className='card' onClick={()=>{changeId(obj.id)}}style={{ display: 'flex', flexDirection: 'column' }}>
      {obj.url ? <img alt={`product image of ${obj.name}`} width='50px'src={obj.url} />: <p>No Product Image</p>}
      <span>{obj.category}</span>
      <span>{obj.name}</span>
        {obj.sale_price ? <>
                        <span style={{ color:'red' }}>{obj.sale_price}</span>
                        <span style={{ textDecoration: 'line-through' }}>{obj.default_price}</span>
                      </>: <span>{obj.default_price}</span>}
        <span><StarDisplay rating={obj.stars}/></span>
    </div>
  </div>
  )
}

export default OutfitCard;