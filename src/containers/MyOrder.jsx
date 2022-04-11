import React, { useContext } from 'react'
import OrderItem from '@components/OrderItem'
import AppContext from '@context/AppContext'
import '@styles/MyOrder.scss'

import arrow from '@icons/flechita.svg'

const MyOrder = () => {
  const {
    state: { cart: cartItems },
  } = useContext(AppContext)

  const sumTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0)
  }

  return (
    <aside className="MyOrder">
      {cartItems.map(product => (
        <OrderItem key={`orderItem-${product?.id}`} {...product} />
      ))}
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  )
}

export default MyOrder
