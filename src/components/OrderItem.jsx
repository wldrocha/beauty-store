import React from 'react'
import '@styles/OrderItem.scss'
import close from '@icons/icon_close.png'

const OrderItem = ({ images: { 0: image }, price, title }) => {
  return (
    <div className="OrderItem">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img src={close} alt="close" />
    </div>
  )
}

export default OrderItem
