import React from 'react'
import Modern from './Modern'
import Craft from './Craft'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Why from './Why'
import Interior from './Interior'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Container } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Modern/>
      <Craft/>
      <Why/>
      <Interior/>
    <Testimonials/>
{/* <div className='bg-body-tertiary py-5 px-5'>
    <div className='d-flex justify-content-between mt-5 px-5'>
      <h1 className='px-3'>Recent Blog</h1>
      <a href='#' className='text-dark text-decoration-underline px-3 fw-300'>View All Posts</a>
    </div>
    <Container >
  <Row className='py-5'>
    <Col >
    <Card style={{ width: '26rem',height:"450px" }} className='border-0 bg-body-tertiary'>
      <Card.Img variant="top" src="../post-1.jpg" className='rounded rounded-4'/>
      <Card.Body>
        <Card.Title style={{fontSize:"18px"}}>First Time Home Owner Ideas</Card.Title>
        <Card.Text>
          by <b>Kristin Watson</b> on <b>Dec 19, 2021</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '26rem' }} className='border-0 bg-body-tertiary'>
      <Card.Img variant="top" src="../post-2.jpg" className='rounded rounded-4'/>
      <Card.Body>
        <Card.Title style={{fontSize:"18px"}}>How To Keep Your Furniture Clean</Card.Title>
        <Card.Text>
          by <b>Robert Fox</b> on <b>Dec 15, 2021</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '26rem' }} className='border-0 bg-body-tertiary'>
      <Card.Img variant="top" src="../post-3.jpg" className='rounded rounded-4'/>
      <Card.Body>
        <Card.Title style={{fontSize:"18px"}}>Small Space Furniture Apartment Ideas</Card.Title>
        <Card.Text>
          by <b>Kristin Watson</b> on <b>Dec 12, 2021</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  </Row>
</Container>

</div> */}
    {/* <Footer/>  */}
    </div>
  )
}

export default Home