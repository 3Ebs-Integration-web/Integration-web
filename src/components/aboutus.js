import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AutoLayoutExample.css';

const AutoLayoutExample = () => {
  const cardStyle = { width: '60%' };

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <h2>A propos l'artisanerie</h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <Card>
            <Card.Body>
              <p>
                Créée par une association: <br />
                L'Artisanerie est une boutique qui accompagne de jeunes artisans de tout le pays pour développer leurs projets dans différents domaines:
                Poterie, tissage, travail du bois. Chaque pièce raconte l'histoire d'un créateur et tout le travail réalisé par l'association. <br />
                L'artisanerie : Un espace dévoilant le savoir-faire exceptionnel d'artisans originaires de toute la Tunisie. Ils viennent de Guermessa, de Nefta, de Ain Drahem etc.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} className="custom-col"  >
          <Card className="custom-card" >
            <Card.Body>
              <img src="images/art3.jpg" alt="Description of the image" className="custom-image"/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AutoLayoutExample;

