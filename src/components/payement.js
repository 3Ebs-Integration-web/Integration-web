import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Pay() {
  const [email, setEmail] = useState("");

  const handleOrderNow = async () => {
    const backendEndpoint = " http://localhost:3001/send-email";

    try {
      const response = await fetch(backendEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"

        },
        body: JSON.stringify({
          to: email,
          subject: "Order Confirmation",
          text: "Thank you for placing your order!",
          html: "<b>Thank you for placing your order!</b>",
        }),
      });

      if (response.ok) {
        alert("Order placed successfully!");
      } else {
        alert("Failed to place the order. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#f9c9aa" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="9" lg="7" xl="5">
          <MDBCard>
            {/* ... (rest of your component) */}
            <MDBCardBody>
              {/* ... (rest of your component) */}
              <MDBInput
                label="Email"
                id="form0"
                type="email"
                placeholder="example@example.com"
                wrapperClass="mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBBtn block color="info" onClick={handleOrderNow}>
                Order now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

