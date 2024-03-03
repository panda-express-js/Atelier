import React, {useState, useEffect} from 'react'
import axios from 'axios';

const RelatedCard = ({id, server, options}) => {
  //category,name,price/
  const [productInfo, setProductInfo] = useState({});
  const [productImg, setProductImg] = useState(null);
  const [productSale, setProductSale] = useState(null)
  const [rating, setRating] = useState('')

  useEffect(() => {
    axios.get(`${server}/products/${id}`, options)
    .then((result) => {
      setProductInfo(result.data);
    })
    .catch((err) => {
      console.log(err)
    })
    .then(() => {
      axios.get(`${server}/products/${id}/styles`, options)
      .then((result) => {
        setProductImg(result.data.results[0].photos[0].url)
        setProductSale(result.data.results[0].sale_price)
      })
      .catch((err) => {
        console.log(err)
      })
    })
  }, [])
  //function for switching current Product

  return (
    <div className='card' style={{ display: 'flex', flexDirection: 'column' }}>
      {productImg ? <img alt='product image' width='50px'src={productImg} />: <p>No Product Image</p>}
      <span>{productInfo.category}</span>
      <span>{productInfo.name}</span>
        {productSale ? <>
                        <span style={{ color:'red' }}>{spanroductSale}</span>
                        <span style={{ textDecoration: 'line-through' }}>{productInfo.default_price}</span>
                      </>: <span>{productInfo.default_price}</span>}
        <span>rating</span>
    </div>
  )
}

export default RelatedCard;