import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';



function BasicExample() {
  return (
    <div>
      
 <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <Card style={{ width: '400px' }}>
     
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="nom" placeholder="nom" />
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="prénom" placeholder="prénom" />
              <Form.Label>E-mail </Form.Label>
              <Form.Control type="e-mail" placeholder="azerty@gmail.com" />
              
            
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="***********" />
            </Form.Group>

            

            <Button variant="primary" type="submit">
             S'inscrire
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <footerr/>
    </div>

    </div>
   
  );
}

export default BasicExample;

