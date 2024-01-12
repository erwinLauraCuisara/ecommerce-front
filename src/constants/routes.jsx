import React from 'react'
import HomePage from '../features/HomePage/HomePage'
import ShoppingCartList from '../features/ShoppingCart/ShoppingCartList'

const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/shopping-cart",
      element: <ShoppingCartList />,
    }
]

export default routes;