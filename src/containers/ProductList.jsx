import React, { useState, useEffect } from 'react'
import ProductItem from '@components/ProductItem'
import useGetProducts from '@hooks/useGetProducts'
import '@styles/ProductList.scss'


const ProductList = () => {
  const API = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=5'

  const products = useGetProducts(API)

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(product => (
          <ProductItem product={product} key={product?.id} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
