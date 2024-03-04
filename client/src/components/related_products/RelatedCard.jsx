import React, {useState, useEffect} from 'react'
import axios from 'axios';

const RelatedCard = ({id, obj, changeId}) => {

  return (
    <div className='card' onClick={()=>{changeId(id)}}style={{ display: 'flex', flexDirection: 'column' }}>
      {obj.url ? <img alt='product image' width='50px'src={obj.url} />: <p>No Product Image</p>}
      <span>{obj.category}</span>
      <span>{obj.name}</span>
        {obj.sale_price ? <>
                        <span style={{ color:'red' }}>{obj.sale_price}</span>
                        <span style={{ textDecoration: 'line-through' }}>{obj.default_price}</span>
                      </>: <span>{obj.default_price}</span>}
        <span>rating</span>
    </div>
  )
}

export default RelatedCard;