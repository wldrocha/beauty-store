import { useState, useEffect } from 'react'
import axios from 'axios'

import React from 'react'

const useGetProducts = API => {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const { data: products } = await axios.get(API)
    setProducts(products)
  }, [])

  return products
}

export default useGetProducts