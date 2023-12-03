import React, { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { useAuth } from "./AuthContext"; // Import the AuthContext


const PannierComponent = ({ isShow, handleShow }) => {
  const { isLoggedIn, logout } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartValue = sessionStorage.getItem('cart');
    if (cartValue) {
      setCart(JSON.parse(cartValue));
    }
  }, [sessionStorage.getItem('cart')]);

  const updateCartAndTotalPrice = (updatedCart) => {
    setCart(updatedCart);
    const totalPrice = updatedCart.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    sessionStorage.setItem('totalPrice', totalPrice);
  };

  const handleDeleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    updateCartAndTotalPrice(updatedCart);
  };

  const handlePayNow = () => {
    const totalPrice = getTotalPrice();
    sessionStorage.setItem('payTotalPrice', totalPrice);
    window.location.href = '/Payemen'; // Replace with the URL of the payment page
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
  };

  return (
    <Offcanvas show={isShow} onHide={handleShow }placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{ fontSize: '1.5rem' }}>Panier d'achat</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart.length > 0 ? (
          <div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {cart.map((item, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: '1rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '1rem',
                  }}
                >
                  <Card style={{ width: '100%' }}>
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{ height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        <strong>Quantité :</strong> {item.quantity} <br />
                        <strong>Prix :</strong> {item.totalPrice} €
                      </Card.Text>
                    </Card.Body>
                    <Button
                      variant="danger"
                      style={{ width: '100%', borderRadius: '0', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}
                      onClick={() => handleDeleteItem(index)}
                    >
                      Supprimer
                    </Button>
                  </Card>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Prix total : {getTotalPrice()} €</p>
            {!isLoggedIn && (
              <>
                <p style={{ fontStyle: 'italic', color: 'gray' }}>
                  Vous devez vous connecter pour acheter chez nous.
                </p>
                <Nav.Link href="/Connexion">
                  <Button
                    variant="outline-secondary"
                    style={{ width: '100%', borderRadius: '8px' }}
                  >
                    Se connecter
                  </Button>
                </Nav.Link>
              </>
            )}
            <Button
              variant="outline-secondary"
              style={{ width: '100%', borderRadius: '8px', marginTop: '1rem' }}
              disabled={!isLoggedIn}
              onClick={handlePayNow}
            >
              Payer maintenant
            </Button>
          </div>
        ) : (
          <div>
            <p>Votre panier est vide. Ajoutez des articles au panier pour les voir ici !</p>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default PannierComponent;







