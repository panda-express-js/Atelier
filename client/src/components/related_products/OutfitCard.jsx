import React, {useState, useEffect} from 'react';
import StarDisplay from '../ratings/star_rating/Star_Display.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import PhotoView from './PhotoView.jsx'
const OutfitCard = ({obj, deleteOutfit, changeId}) => {
//{obj.url ? <img onClick={()=>{changeId(obj.id)}}alt={`product image of ${obj.name}`} width='50px'src={obj.url} />: <img onClick={()=>{changeId(obj.id)}}/>}
const [photo, setPhoto] = useState(obj.photosArray[0].url);
const changePhoto = (url) => {
  setPhoto(url);
}
  return (
    <div className='outfitCardDiv'>
      <div className='cardTop'>
        <FontAwesomeIcon className='BTN' icon={faCircleXmark} onClick={()=> {deleteOutfit(obj.id)}}/>
        <img className='mainImg' onClick={()=>{changeId(obj.id)}}alt={`product image of ${obj.name}`} width='50px'src={photo} />
      <PhotoView photos={obj.photosArray} photo={photo} changePhoto={changePhoto}/>
      </div>
      <div className="cardBottom"  onClick={()=>{changeId(obj.id)}}>
        <span className='cardCategory'>{obj.category}</span>
        <span className='cardName'>{obj.name}</span>
        {obj.sale_price ? <span style={{display:'flex'}}> <span className='prices' style={{ color:'red' }}>{obj.sale_price}</span>
        <span className='prices' style={{ textDecoration: 'line-through' }}>{obj.default_price}</span></span>: <span className='prices'>{obj.default_price}</span>}
        <span className='starSpan'><StarDisplay rating={obj.stars}/></span>
      </div>
  </div>
  )
}

export default OutfitCard;