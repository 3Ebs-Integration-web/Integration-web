import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./components/AuthContext";
import firebaseConfig from "./fierbaseConfig";
import './sign.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [showModal, setShowModal] = useState(false);
    const { isLoggedIn, login } = useAuth();
    const navigate = useNavigate();

    const handleModalClose = () => setShowModal(false);

    const submit = async (e) => {
        e.preventDefault();
        try {
            const user = await firebaseConfig.auth().signInWithEmailAndPassword(email, pass);
            if (user) {
                // Show the login success modal
                setShowModal(true);
                // Set isLoggedIn to true using the context
                login();
                // Redirect to the App component
                navigate("/App");
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <div className="main_container_signup">
                <div className="header">
                    <h3>Login</h3>
                </div>

                <div className="box">
                    <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="box">
                    <input type="password" value={pass} placeholder="password" onChange={(e) => setPass(e.target.value)}></input>
                </div>
                <p>Don't have an Account <Link to="/Inscirpition">Create Account</Link> </p>
                <button onClick={submit}>Login</button>

                {/* Conditionally render Link based on isLoggedIn */}
                {isLoggedIn ? <Link to="/App">Go to App</Link> : null}

                {/* Login Success Modal */}
                <Modal show={showModal} onHide={handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login Successful</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You have successfully logged in!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleModalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default Login;

