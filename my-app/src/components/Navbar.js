import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import PannierComponent from './PannierComponent';
import { useAuth } from "./AuthContext";

function Navbare() {
    const { isLoggedIn, logout } = useAuth();

    const navbarStyles = {
        backgroundColor: '#bdc3c7',
        color: 'white',
    };

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    return (
        <>
            <Navbar expand="lg" style={navbarStyles}>
                <Container>
                    <Navbar.Brand href="/App">
                        <img
                            src="images\logo.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                        
                    </Navbar.Brand>
                    <Nav.Link href="/App">L'artisanerie</Nav.Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                        <Form className="d-flex mx-auto">
                            <FormControl
                                type="search"
                                placeholder="Recherchez"
                                className="mr-2"
                                aria-label="Search"
                                style={{ width: '500px' }}
                            />
                            <Button variant="outline-success">Recherche</Button>
                        </Form>

                        <Nav>
                            <Nav.Link href="/App">Accueil</Nav.Link>
                            <Nav.Link href="/products">produit</Nav.Link>
                            <NavDropdown title={isLoggedIn ? "Déconnexion" : "Connexion"} id="basic-nav-dropdown">
                                {isLoggedIn ? (
                                    <NavDropdown.Item onClick={logout}>Déconnexion</NavDropdown.Item>
                                ) : (
                                    <>
                                        <NavDropdown.Item href="/Connexion">Connexion</NavDropdown.Item>
                                        <NavDropdown.Item href="/Inscirpition">Inscription</NavDropdown.Item>
                                    </>
                                )}
                            </NavDropdown>

                            {/* Cart Icon */}
                            <Nav.Link href="#cart" style={{ fontSize: '1.5em' }} onClick={handleShow}>
                                <span role="img" aria-label="Shopping Cart">
                                    🛒
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <PannierComponent isShow={show} handleShow={handleShow} />
        </>
    );
}

export default Navbare;

