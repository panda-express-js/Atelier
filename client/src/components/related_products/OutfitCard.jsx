import React, {useState, useEffect} from 'react';

const OutfitCard = ({obj, deleteOutfit}) => {

  return (
    <div>
    <button onClick={()=> {deleteOutfit(obj.id)}}>delete x icon</button>
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

export default OutfitCard;