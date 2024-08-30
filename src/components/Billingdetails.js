import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Billingdetails() {
  return (
    <div className='text-start'>
            <label className='pt-2 '>Country<span className='text-red'>*</span></label>
    <Form.Select aria-label="Default select example" className='mb-3'>

      <option>Select a Country</option>
      <option value="1">India</option>
      <option value="2">China</option>
      <option value="3">Srilanka</option>
      <option value="3">Manmar</option>
    </Form.Select>
    <Form>
      <Row>
        <Col>
        <label>First Name</label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
        <label>Last Name</label>
            <Form.Control placeholder="Last name" />
        </Col>
      </Row>
    </Form>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Comapny Name</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="email" placeholder="Street address" />
        <Form.Control type="email" placeholder="Apartment,suite,unit etc.(optinal)" />

      </Form.Group>
      <Form>
      <Row>
        <Col>
        <label>State/Country</label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
        <label>Posta/Zip</label>
            <Form.Control placeholder="Last name" />
        </Col>
      </Row>
    </Form>
    <Form>
      <Row>
        <Col>
        <label>Email Address</label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
        <label>Phone</label>
            <Form.Control placeholder="Last name" />
        </Col>
      </Row>
    </Form>
    </div>
  )
}

export default Billingdetails