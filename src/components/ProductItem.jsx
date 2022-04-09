import React from 'react'
import '@styles/ProductItem.scss'
import cart from '@icons/bt_add_to_cart.svg'

const ProductItem = ({
  product: {
    description,
    price,
    title,
    images: { 0: image },
  },
}) => {
  console.log(title)
  return (
    <div className="ProductItem">
      <img
        src={image}
        alt=""
      />
      <div className="product-info">
        <div>
          <p>$ {price}</p>
          <p>{title}</p>
        </div>
        <figure>
          <img src={cart} alt="cart icon" />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
