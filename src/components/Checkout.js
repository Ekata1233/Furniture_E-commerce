import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Checkout() {
  return (
    <div className=''>
        <Container>
      <Row className='mb-5 ' style={{paddingBottom:"300px"}}>
        <Col className='bg-light'>1 of 1</Col>
        <Col>
        <Row className='bg-light'>1</Row>
        <Row className=''>2</Row>
        </Col>

      </Row>
    </Container>
    </div>
  )
}

export default Checkout