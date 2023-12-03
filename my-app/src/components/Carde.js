import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardExample({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const handleQuantityScroll = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    setTotalPrice((product.price * newQuantity).toFixed(2));
  };

  const onAddToCart = () => {
    const productToAdd = {
      image: product.image,
      quantity: quantity,
      title: product.title,
      totalPrice: parseFloat(totalPrice), // Ensure totalPrice is a number
    };

    var cartValue = sessionStorage.getItem('cart');

    if (cartValue == null) {
      cartValue = [];
    } else {
      cartValue = JSON.parse(cartValue);
    }

    cartValue.push(productToAdd);
    sessionStorage.setItem('cart', JSON.stringify(cartValue));

    // You can use a more user-friendly confirmation UI here
    console.log(cartValue);
  };

  return (
    <div className='col-3 mr-2 mt-5'>
      <Card style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: '0.3s' }}>
        <Card.Img variant="top" src={product.image} style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
        <Card.Body>
          <Card.Title style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{product.title}</Card.Title>
          <Card.Text>
            <span style={{ fontWeight: 'bold' }}>Prix:</span> {product.price} D
            <br />
            <span style={{ fontWeight: 'bold' }}>Quantité:</span> 
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={quantity}
              onChange={handleQuantityScroll}
            />
            {quantity}
            <br />
            <span style={{ fontWeight: 'bold' }}>Total Prix:</span> {totalPrice} D
          </Card.Text>
          <Button variant="primary" onClick={onAddToCart} style={{ width: '100%', backgroundColor: '#007bff', borderColor: '#007bff' }}>
            Ajouter au panier
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;




