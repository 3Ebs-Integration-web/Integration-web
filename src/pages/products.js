import React from 'react';
import CardExample from '../components/Carde';

function Products() {
  const products = [
    {
      image: "images\\prd1.jpg",
      title: "Grandes tasses en céramique",
      price: 25,
    },
    {
      image: "images\\prd2.jpg",
      title: "Tabourets en rotin",
      price: 150,
    },
    {
      image: "images\\prd3.jpg",
      title: "Poteries bicolores",
      price: 225,
    },
    {
      image: "images\\prd4.jpg",
      title: "kilims en laine recyclée",
      price: 15,
    },
    {
      image: "images\\prd5.jpg",
      title: "Fibres végétales",
      price: 80,
    },
    {
      image: "images\\prd6.jpg",
      title: "Miroir mural rond",
      price: 30,
    },
    {
      image: "images\\prd7.jpg",
      title: "Bois ou argile",
      price: 65,
    },
    {
      image: "images\\prd8.jpg",
      title: "Verres en céramiques",
      price: 75,
    },
    // Add more product objects as needed
  ];

  return (
    <div className='d-flex row'>
      {products.map((product, index) => (
        <CardExample key={index} product={product} />
      ))}
    </div>
  );
}

export default Products;
