import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Craft() {
  return (
    <div>
        <Container>
            <div className=' row d-flex align-items-center justify-content-evenly pb-5 mb-5'>
            
                <div className='col-md-12 col-lg-3 mb-5 mb-lg-0 p-2 text-start'>
                    <h1>Crafted with excellent material</h1>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <Button variant="dark" className='rounded-pill px-4 fs-4'>Explore</Button>
                </div>
                <div className='col-sm-3 col-md-4 col-lg-3 mb-5 mb-lg-0 p-2 craft'>
                      <Card style={{ width: '16rem' }} className='border-0'>
                        
                        <div className='abc'>
                          <Card.Img variant="top" src='../Product-1.png' />
                        </div>
                          <Card.Body>
                              <Card.Title>Nordiac Chair</Card.Title>
                              <Card.Text>
                                  <h4>$ 50.00</h4>
                              </Card.Text>
                              <Button variant="dark" className='rounded-circle fw-bold btn1 '>+</Button>
                              <div className='div-hov'></div>
                          </Card.Body>
                      </Card>
                </div>
                <div className='col-sm-3 col-md-4 col-lg-3 mb-5 mb-lg-0 p-2 craft'>
                <Card style={{ width: '16rem' }} className='border-0'>
                        <div className='abc'>
                          <Card.Img variant="top" src='..//Product-2.png' />
                          </div>
                          <Card.Body>
                              <Card.Title>Kruzo Aero Chair</Card.Title>
                              <Card.Text>
                                  <h4>$ 78.00</h4>
                              </Card.Text>
                              <Button variant="dark" className='rounded-circle fw-bold btn1'>+</Button>
                          </Card.Body>
                      </Card>
                </div>
                <div className='col-sm-3 col-md-4 col-lg-3 mb-5 mb-lg-0 p-2 p-2 craft'>
                <Card style={{ width: '16rem' }} className='border-0'>
                       <div className='abc'>
                          <Card.Img variant="top" src='../Product-1.png' className=''/>
                          </div>
                          <Card.Body>
                              <Card.Title>Ergonomic Chair</Card.Title>
                              <Card.Text>
                                  <h4>$ 43.00</h4>
                              </Card.Text>
                              <Button variant="dark" className='rounded-circle fw-bold btn1 '>+</Button>
                          </Card.Body>
                      </Card>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Craft