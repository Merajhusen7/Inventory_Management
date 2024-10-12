
import React, { useState } from 'react';

const AddProduct = ({ onAdd }) => {
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName && productId && quantity) {
      onAdd({ product_name: productName, product_id: productId, quantity: Number(quantity) });
      setProductName('');
      setProductId('');
      setQuantity(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
