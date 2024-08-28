import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Craft from './Craft'

function Services() {
  return (
    <div>
      <Container fluid className=''>
        <Row className='bg-success text-white p-3 text-start '>
            <Col className='ms-5'>
            
            <h1 className=' fw-bold w-75 mt-5 display-4 ms-4'>Services</h1>
            <p className='fs-6 mt-4 mb-4 ms-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <Button variant="warning rounded-pill fw-bold p-3 w-25 ms-4 mb-4">Warning</Button>
            <Button variant="outline-light rounded-pill fw-bold p-3 ms-4 w-25 mb-4">Light</Button>
            </Col>
            <Col>
            <img src='./couch.png' alt=''className='img-fluid w-100 mx-auto d-block'/>           
             </Col>
        </Row>
        
        </Container>
        <Container fluid className='bg-body-tertiary  mb-5 text-start p-5'>
        <table className='table table-light table-borderless'>
          <tr>
              <td className=' px-5 fs-6'>
                  <img src='../truck.svg' alt=''/>
                    <h6>Fast & Free Shipping</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='../bag.svg' alt=''/>
                    <h6>Easy to Shop</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='../support.svg' alt=''/>
                    <h6>24/7 Support</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='../return.svg' alt=''/>
                    <h6>Hassle Free Returns</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
          </tr>
          
        </table>
        <table className='table table-light table-borderless'>
          <tr>
              <td className='px-5 fs-6 ' >
                  <img src='../truck.svg' alt=''/>
                    <h6>Fast & Free Shipping</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='../bag.svg' alt=''/>
                    <h6>Easy to Shop</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='../support.svg' alt=''/>
                    <h6>24/7 Support</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='../return.svg' alt=''/>
                    <h6>Hassle Free Returns</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
          </tr>
          
        </table>
        </Container>
       
      
       <Craft/>
       <div className='p-5'>
        
      </div>
    </div>
  )
}

export default Services