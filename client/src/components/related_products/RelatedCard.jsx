import React, {useState, useEffect} from 'react'
import axios from 'axios';

const RelatedCard = ({id, server, options}) => {

  const [productDetails, setProductDetails] = useState({})

  useEffect(() => {
    axios.get(`${server}/products/${id}`, options)
    .then((result) => {
      setProductDetails(result.data);
    })
  }, [])


  return (
    <div>
      {productDetails.id}
      {productDetails.name}
      {productDetails.category}
    </div>
  )
}

export default RelatedCard;