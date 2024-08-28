import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
function Interior() {
  return (
    <div className=' bg-body-tertiary'>
        <Container>
        <Row className='text-start bg-light mb-5 g-5 py-5 justify-content-md-center'>
            <Col md={7} sm={true}>
            <div className='position-relative '>
                <img src='../dots-green.svg' alt='' className=''/>
               
                <div className='position-absolute top-50 start-50 translate-middle-x'>
                    <div className='d-flex'>
                    <img src='../img-grid-1.jpg' alt='' height={450} width={350} className='rounded rounded-4'/>
                    <img src='../img-grid-2.jpg' alt='' className='ms-2 rounded rounded-4 mb-3' height={200} width={200}/>
                    </div>
                    <img src='../img-grid-3.jpg' alt='' height={320} width={280} className='rounded rounded-4 ' style={{marginTop:"-235px",marginLeft:"280px",marginBottom:"150px"}}/>

                    {/* <div className='position-absolute top-50 start-50' style={{zIndex:1}}>
                    <img src='./images/img-grid-3.jpg' alt='' height={320} width={280} className='rounded rounded-4'/>
                    </div> */}
                </div>
            </div>
            </Col>
            <Col md={5}  sm={true}>
                <h1>We Help You Make Modern Interior Design</h1>
                <p className='mt-4'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                <table className='table table-borderless table-light'>
                    <tr>
                        <td>
                            <ul type="circle">
                                <li>Donec vitae odio quis<br/> nisl dapibus malesuada</li>
                            </ul>
                        </td>
                        <td>
                            <ul type="circle">
                                <li>Donec vitae odio quis<br/> nisl dapibus malesuada</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ul type="circle">
                                <li>Donec vitae odio quis<br/> nisl dapibus malesuada</li>
                            </ul>
                        </td>
                        <td>
                            <ul type="circle">
                                <li>Donec vitae odio quis <br/>nisl dapibus malesuada</li>
                            </ul>
                        </td>
                    </tr>
                </table>
                <Button variant="dark" className='rounded-pill fw-bold fs-5 px-4 mb-4'>Explore</Button>
            </Col>
        </Row>
        <div className="row row-cols-1 row-cols-md-3 g-4  bg-light py-5" style={{marginTop:"200px"}}>
  <div className="col">
  <div className="card mb-3 bg-light border-0" style={{maxWidth: "540px"}}>
  <div className="row g-0 align-items-center">
    <div className="col-md-4">
      <img src="../product-1.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-start">
        <h5 className="card-title">Nordiac Chair</h5>
        <p className="card-text">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
        <a href='#' className='text-secondary'>Read More</a>
      </div>
    </div>
  </div>
</div>
  </div>
  <div class="col">
  <div className="card mb-3 border-0 bg-light" style={{maxWidth: "540px"}}>
  <div className="row g-0 align-items-center">
    <div className="col-md-4">
    <img src="../product-2.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-start">
      <h5 className="card-title">Kruzo Aero Chair</h5>
        <p className="card-text">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
        <a href='#' className='text-secondary'>Read More</a>
      </div>
    </div>
  </div>
</div>
  </div>
  <div class="col">
  <div className="card mb-3 border-0 bg-light" style={{maxWidth: "540px"}}>
  <div className="row g-0 align-items-center">
    <div className="col-md-4">
    <img src="../product-3.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-start">
      <h5 className="card-title">Ergonomic Chair</h5>
        <p className="card-text">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
        <a href='#' className='text-secondary'>Read More</a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
        </Container>
    </div>
  )
}

export default Interior