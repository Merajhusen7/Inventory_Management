

import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';

const Inventory = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.product_id !== productId));
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onRemove={removeProduct} />
    </div>
  );
};

export default Inventory;
