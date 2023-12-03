import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div style={{ width: '100%' }}>
      <Carousel style={{ height: '25vh' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/backgroung.png"
            alt="First slide"
            style={{ width: '664px', height: '374px' }}
          />
          <Carousel.Caption>
            <h1>L'artisanerie</h1>
            <p>DECOUVREZ L'ART ET LA PASSION DERRIERE CHAQUE CREATION</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/art3.jpg"
            alt="Second slide"
            style={{ width: '664px', height: '374px' }}
          />
          <Carousel.Caption>
            <h1>L'artisanerie</h1>
            <p>DECOUVREZ L'ART ET LA PASSION DERRIERE CHAQUE CREATION</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/art.jpg"
            alt="Third slide"
            style={{ width: '664px', height: '374px' }}
          />
          <Carousel.Caption>
            <h1>L'artisanerie</h1>
            <p>DECOUVREZ L'ART ET LA PASSION DERRIERE CHAQUE CREATION </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}

export default UncontrolledExample;

