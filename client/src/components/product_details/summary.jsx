import React from 'react';

const Summary = ({ product }) => {
  console.log('from sum:', product);

  return (
    <div>
      <div>
        <div>{product.slogan}</div>
        <div>{product.description}</div>
      </div>
      <div></div>
    </div>
  )
}

export default Summary;