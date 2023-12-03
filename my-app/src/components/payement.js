import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit';

export default function Pay() {
  const payTotalPrice = sessionStorage.getItem('payTotalPrice') || '0.00';

  const handleOrderNow = async () => {
    const cardNumber = document.getElementById('form1').value;
    const emailInput = document.getElementById('email');
    const userEmail = emailInput ? emailInput.value : '';

    const response = await fetch('http://localhost:3001/api/sendOrderConfirmationEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: userEmail,
       
      }),
    });

    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email');
    }
  };

  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: '#f8dfd5' }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="9" lg="7" xl="5">
          <MDBCard>
            <MDBCardImage src="images\arti1.jpg" position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle className="d-flex justify-content-between mb-0">
                <p className="text-muted mb-0">chaise rétro</p>
                <p className="mb-0">{payTotalPrice} D</p>
              </MDBCardTitle>
            </MDBCardBody>
            <div className="rounded-bottom" style={{ backgroundColor: '#eee' }}>
              <MDBCardBody>
                <p className="mb-4">Vos détails de paiement</p>
                <MDBInput label="N° de carte" id="form1" type="text" placeholder="1234 5678 1234 5678" wrapperClass="mb-3" />
                <MDBInput label="Email" id="email" type="email" placeholder="Votre adresse e-mail" wrapperClass="mb-3" />
                <MDBRow className="mb-3">
                  <MDBCol size="6">
                    <MDBInput label="Expirer" id="form2" type="Mot de passe" placeholder="MM/YYYY" wrapperClass="mb-3" />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBInput label="CVV" id="form4" type="Mot de passe" placeholder="CVV" wrapperClass="mb-3" />
                  </MDBCol>
                </MDBRow>
                <MDBBtn block color="secondary" onClick={handleOrderNow}>
                  Commendez maintenant
                </MDBBtn>
              </MDBCardBody>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

