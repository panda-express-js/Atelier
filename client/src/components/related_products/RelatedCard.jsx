import React, {useState, useEffect} from 'react'
import axios from 'axios';

const RelatedCard = ({id, server, options}) => {

  const [productDetails, setProductDetails] = useState({});
  const [url, setUrl] = useState('');
  const [rating, setRating] = useState('')

  useEffect(() => {
    axios.get(`${server}/products/${id}`, options)
    .then((result) => {
      setProductDetails(result.data);
    })
    .catch((err) => {
      console.log(err)
    })
    .then(() => {
      axios.get(`${server}/products/${id}/styles`, options)
      .then((result) => {
        setUrl(result.data.results)
      })
    })
  }, [id])
  //image is the primary image for product / in /products/:product_id/styles default true photos
  //product category / name/ price/ star rating placeholder (review url)
  return (
    <div>
      <img src='https://www.canva.com/design/DAF-UL2QTf0/KQAkm5BxCwCHxTyNpDfE0w/edit?utm_content=DAF-UL2QTf0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'/>
      {productDetails.category}
      {productDetails.name}
      {productDetails.default_price}

    </div>
  )
}

export default RelatedCard;