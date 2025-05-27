// src/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  const handleAddToCart = () => {
    console.log(`Added to cart: ${product.name}`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating} ⭐</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
