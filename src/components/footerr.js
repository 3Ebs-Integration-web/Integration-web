import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='secondary'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn
            outline
            color='light'
            floating
            className='m-1'
            href='https://www.facebook.com/lartisanerietunisie'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

        

          <MDBBtn
            outline
            color='light'
            floating
            className='m-1'
            href='https://www.instagram.com/l_artisanerie/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            outline
            color='light'
            floating
            className='m-1'
            href='https://www.pinterest.com/comlartisanerie/'
            role='button'
          >
            <MDBIcon fab icon='pinterest' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>{/* ... */}</MDBRow>
          </form>
        </section>

        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
          
          <p>
            <MDBIcon icon='home' className='me-2' />
            L'Artisanerie, 44, rue du Nigar, 1073 Tunis.
          </p>
          <p>
            <MDBIcon icon='envelope' className='me-3' />
            L'artisanerie@gmail.com
          </p>
          <p>
            <MDBIcon icon='phone' className='me-3' /> + 216 71 903 042
          </p>
        </MDBCol>
      </MDBContainer>

      <div
        className='text-center p-3'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2023 Copyright
      </div>
    </MDBFooter>
  );
}
