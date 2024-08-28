import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Blog() {
  return (
    <div>
       <Container fluid>
        <Row className='bg-success text-white p-3 text-start '>
            <Col className='ms-5'>
            
            <h1 className=' fw-bold w-75 mt-5 display-4 ms-4'>Blog</h1>
            <p className='fs-6 mt-4 mb-4 ms-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <Button variant="warning rounded-pill fw-bold p-3 w-25 ms-4 mb-4">Warning</Button>
            <Button variant="outline-light rounded-pill fw-bold p-3 ms-4 w-25 mb-4">Light</Button>
            </Col>
            <Col>
            <img src='./couch.png' alt=''className='img-fluid w-100 mx-auto d-block'/>           
             </Col>
        </Row>
        </Container>
      
        <Container>
  <Row className='py-5'>
    <Col>
    <Card style={{ width: '22rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/post-1.jpg" className='rounded rounded-4'/>
      <Card.Body>
        <Card.Title style={{fontSize:"18px"}}>First Time Home Owner Ideas</Card.Title>
        <Card.Text>
          by <b>Kristin Watson</b> on <b>Dec 19, 2021</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '22rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/post-2.jpg" className='rounded rounded-4'/>
      <Card.Body>
        <Card.Title style={{fontSize:"18px"}}>How To Keep Your Furniture Clean</Card.Title>
        <Card.Text>
          by <b>Robert Fox</b> on <b>Dec 15, 2021</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '22rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/post-3.jpg" className='rounded rounded-4'/>
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
<Container>
  <Row className='py-5'>
    <Col>
    <Card style={{ width: '22rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/post-1.jpg" className='rounded rounded-4'/>
      <Card.Body>
        <Card.Title style={{fontSize:"18px"}}>First Time Home Owner Ideas</Card.Title>
        <Card.Text>
          by <b>Kristin Watson</b> on <b>Dec 19, 2021</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '22rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/post-2.jpg" className='rounded rounded-4'/>
      <Card.Body>
        <Card.Title style={{fontSize:"18px"}}>How To Keep Your Furniture Clean</Card.Title>
        <Card.Text>
          by <b>Robert Fox</b> on <b>Dec 15, 2021</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '22rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/post-3.jpg" className='rounded rounded-4'/>
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
<Container>
  <Row className='py-5'>
    <Col>
    <Card style={{ width: '22rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/post-1.jpg" className='rounded rounded-4'/>
      <Card.Body>
        <Card.Title style={{fontSize:"18px"}}>First Time Home Owner Ideas</Card.Title>
        <Card.Text>
          by <b>Kristin Watson</b> on <b>Dec 19, 2021</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '22rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/post-2.jpg" className='rounded rounded-4'/>
      <Card.Body>
        <Card.Title style={{fontSize:"18px"}}>How To Keep Your Furniture Clean</Card.Title>
        <Card.Text>
          by <b>Robert Fox</b> on <b>Dec 15, 2021</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '22rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/post-3.jpg" className='rounded rounded-4'/>
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
    </div>
  )
}

export default Blog