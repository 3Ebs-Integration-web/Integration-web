import React, { useState } from "react";
import './signup.css';
import { Link } from "react-router-dom";
import firebaseConfig from "./fierbaseConfig";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    const submit = async (e) => {
        e.preventDefault();
        try {
            const user = await firebaseConfig.auth().createUserWithEmailAndPassword(email, pass);
            if (user) {
                setShowModal(true);
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <div className="main_container_signup">
                <div className="header">
                    <h3>Signup</h3>
                </div>
                <div className="box">
                    <input type="text" value={name} placeholder="username" onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="box">
                    <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="box">
                    <input type="password" value={pass} placeholder="password" onChange={(e) => setPass(e.target.value)}></input>
                </div>
                <p>Already have an Account <Link to="   /Connexion">login now</Link> </p>
                <button onClick={submit}>Signup</button>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Account Created</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your account has been created successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Signup;
