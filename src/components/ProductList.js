
import React from 'react';

const ProductList = ({ products, onRemove }) => (
  <div>
    <h2>Inventory List</h2>
    {products.length === 0 ? (
      <p>No products available</p>
    ) : (
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>
            {product.product_name} (ID: {product.product_id}, Quantity: {product.quantity})
            <button onClick={() => onRemove(product.product_id)}>Remove</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ProductList;
