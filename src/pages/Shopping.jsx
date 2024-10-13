import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
const Shopping = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'iPhone 14 Pro',
      image: 'https://example.com/images/iphone14pro.jpg',
      price: 1099,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      image: 'https://example.com/images/galaxys23.jpg',
      price: 999,
    },
    {
      id: 3,
      name: 'MacBook Air M2',
      image: 'https://example.com/images/macbookairm2.jpg',
      price: 1199,
    },
    {
      id: 4,
      name: 'Dell XPS 13',
      image: 'https://example.com/images/dellxps13.jpg',
      price: 1299,
    },
    {
      id: 5,
      name: 'Sony WH-1000XM5',
      image: 'https://example.com/images/sonywh1000xm5.jpg',
      price: 399,
    },
    {
      id: 6,
      name: 'Google Pixel 7 Pro',
      image: 'https://example.com/images/pixel7pro.jpg',
      price: 899,
    },
    {
      id: 7,
      name: 'Apple iPad Pro 12.9',
      image: 'https://example.com/images/ipadpro12_9.jpg',
      price: 1099,
    },
    {
      id: 8,
      name: 'Bose QuietComfort 45',
      image: 'https://example.com/images/boseqc45.jpg',
      price: 329,
    },
    {
      id: 9,
      name: 'OnePlus 11',
      image: 'https://example.com/images/oneplus11.jpg',
      price: 849,
    },
    {
      id: 10,
      name: 'Microsoft Surface Laptop 5',
      image: 'https://example.com/images/surfacelaptop5.jpg',
      price: 999,
    },
  ]);

  const shoppingStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: '20px',
    padding: '70px',
  };
  return (
    <div style={shoppingStyle}>
      {data.map(({ id, name, image, price }, index) => (
        <Product key={id} name={name} image={image} price={price} />
      ))}
    </div>
  );
};

export default Shopping;
