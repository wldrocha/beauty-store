import React, { useContext } from 'react'
import '@styles/ProductItem.scss'
import AppContext from '@context/AppContext'
import cart from '@icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext)

  const handleClick = item => {
    addToCart(item)
  }

  const {
    description,
    price,
    title,
    images: { 0: image },
  } = product
  return (
    <div className="ProductItem">
      <img src={image} alt="" />
      <div className="product-info">
        <div>
          <p>$ {price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={cart} alt="cart icon" />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
