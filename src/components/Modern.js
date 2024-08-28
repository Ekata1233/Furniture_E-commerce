import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
function Modern() {
  return (
    <div>
      <Container fluid >
        <Row className='main text-white p-3 text-start main'>
            <Col className='ms-5'>
            
            <h1 className='fw-bold w-75 mt-5 display-4 ms-4'>Modern Interior Design Studio</h1>
            <p className='greye fs-6 mt-4 mb-4 ms-4' >Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <Button variant="warning rounded-pill fw-bold p-3 w-25 ms-4 mb-4">Shop Now</Button>
            <Button variant="outline-light rounded-pill fw-bold p-3 ms-4 w-25 mb-4">Explore</Button>
            </Col>
            <Col>
            <img src='./couch.png' alt=''className='img-fluid  mx-auto d-block '/>           
             </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Modern