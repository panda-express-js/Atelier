import React , { useState, useEffect } from 'react'
import axios from 'axios'

const RelatedProducts = ({product, options, server}) => {
  const [related, setRelated] = useState([])
  console.log(product.id, 'component props')
  console.log(server, token)
  //i have id i need to hit server to get related products
  useEffect(() => {
    axios.get(`${server}/products/:${related}`, options)
    .then((response) => {

    })
  }, [])
  //i need to hit server to get each product

  return (
    <div>
      This is my related products component!
    </div>
  )
}

export default RelatedProducts;