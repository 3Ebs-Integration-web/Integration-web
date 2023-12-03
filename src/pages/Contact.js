import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="azerty@gmail.com" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="**********" />
            </Form.Group>

          

            <Button variant="primary" type="submit">
              Se connecter
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
