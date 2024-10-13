import React from 'react';

const Product = ({ name, image, price }) => {
  const productStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '200px',
    padding: '20px',
  };
  return (
    <div className="product-card" style={productStyle}>
      <img src={image} alt="product"></img>
      <h2>{name}</h2>
      <span>{price}</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
