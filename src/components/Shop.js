import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Products from './Products';
import Footer from './Footer';
function Shop() {
  return (
    <div>
       <Container fluid>
        <Row className='bg-success text-white p-3 text-start '>
            <Col className='ms-5'>
            
            <h1 className=' fw-bold w-75 mt-5 display-4 ms-4 mb-5 p-5'>Shop</h1>
            
            </Col>
            <Col>
             </Col>
        </Row>
        </Container>
        <Products/>
        {/* <Footer/> */}
    </div>
  )
}

export default Shop