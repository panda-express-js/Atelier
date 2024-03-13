import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Comparing from './Comparing.jsx'
import PhotoView from './PhotoView.jsx'
import StarDisplay from '../ratings/star_rating/Star_Display.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons'
const RelatedCard = ({id, obj, changeId, product, style}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photo, setPhoto] = useState(obj.photosArray[0].url);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changePhoto = (url) => {
    setPhoto(url);
  }

  return (
    <div className='relatedCardDiv' data-testid='relatedCardDiv'>
      <div className='cardTop'>
        <FontAwesomeIcon data-testid='BTN' className='BTN' icon={faStar} onClick={()=> {openModal()}} />
        <Comparing isModalOpen={isModalOpen} closeModal={closeModal} relatedProduct={obj} mainProduct={product} style={style}/>
        <img data-testid='mainImg' className='mainImg' onClick={()=>{changeId(obj.id)}}alt={`product image of ${obj.name}`} width='50px'src={photo} />
        <PhotoView photos={obj.photosArray} photo={photo} changePhoto={changePhoto}/>
      </div>
      <div data-testid='cardBottom' className='cardBottom' onClick={()=>{changeId(id)}}>
        <span className='cardCategory'>{obj.category}</span>
        <span className='cardName'>{obj.name}</span>
        {obj.sale_price ? <span style={{display:'flex'}}>
                    <span className='prices' data-testid='sale' style={{ color:'red' }}>{obj.sale_price}</span>
                    <span className='prices' style={{ textDecoration: 'line-through' }}>{obj.default_price}</span>
                    </span>: <span data-testid='noSale'className='prices'>{obj.default_price}</span>}
        <span className='starSpan'><StarDisplay rating={obj.stars}/></span>
      </div>
    </div>
  )
}

export default RelatedCard;