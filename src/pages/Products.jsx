import React, { Suspense, lazy } from 'react';

import NuestrosProductos from "../components/shops/Products/NuestrosProductos";
import Categories from "../components/shops/Products/categories/Categories";


const Products = ({shopItems}) => {
  return (
    <div className="products-container">
      <Categories />
      <NuestrosProductos shopItems={shopItems} />
      
    </div>
  )
}

export default Products
