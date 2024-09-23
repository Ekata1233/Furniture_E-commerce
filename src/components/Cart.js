import React,{useEffect,useState,useReducer} from 'react'
import { Container } from 'react-bootstrap'
import { MdDelete } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const [cart,setCart]=useState([])
  const [qty,dispatch]=useReducer(reducer,0)
  const navigate=useNavigate()
  const goToCheckout = ()=>{
    navigate('/Checkout')
  }
  function reducer(qty,action)
  {
    switch(action.type)
    {
      case 'changecartqty':
        return (cart.filter((c)=>{
          return (
              c.id===action.payload.id?(c.qty=action.payload.qty):c.qty
          )
      }))
        default:
          return qty
    }
  }
  function gettotal()
  {
    let total=0
    cart.map((ct)=>{
      total=total+(ct.qty*ct.price)
    })
    return total
  }
  useEffect(()=>{
    fetch("http://localhost:3000/cart").then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        setCart(res2)
      })
    })
    gettotal()
  },[])
  function removecartitem(id)
  {
    fetch(`http://localhost:3000/cart/${id}`,{
          method:"delete"          
      }).then((resp1)=>{
        resp1.json().then((resp2)=>{
          console.log(resp2)
        })
      })
      window.location.reload()
  }

  return (
    <div className=''>
      <Container className='text-start mb-5 light'>
        <table className='table mt-4 mb-4 light'>
            <thead variant="dark">
              <tr><th>ID</th><th>PRODUCT</th><th>NAME</th><th>QUANTITY</th><th>PRICE</th><th></th></tr>
            </thead>
            <tbody>
              {
                cart.map((item,index)=>{
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td><img src={item.image} alt='' height={80} width={80}/></td>
                      <td>{item.name}</td>
                      <td> <Form.Select aria-label="Default select example" value={item.qty}
                    onChange={(e)=>{
                      dispatch({
                        type:"changecartqty",
                        payload:{
                          id:item.id,
                          qty:e.target.value
                        }
                      })
                    }}>
                        {
                          [...Array(item.stock).keys()].map((q)=>{
                            return (
                              <option key={q+1}>{q+1}</option>
                            )
                          })
                        }

                      </Form.Select></td>
                      <td>{item.qty*item.price}</td>
                      <td><MdDelete className='text-danger fs-4' onClick={()=>removecartitem(item.id)}/></td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot>
              <tr><td colSpan={2}>{cart.length} items: </td><td colSpan={2}>Total cost: ${gettotal()}</td></tr>
            </tfoot>
              
        </table>
        <Button variant="dark" className='rounded-pill px-5 py-3 me-5 mt-5 fw-bold'>Update Cart</Button>
        <Button variant="dark" className='rounded-pill px-5 py-3 mt-5 fw-bold'>Continue Shopping</Button>
       
      </Container>
      <Container>
      <Row className='text-start'>
        <Col>
        <h4>Coupon</h4>
        <p>Enter your coupon code if you have one.</p>
        
          
          <Form.Control placeholder="Coupon Code" className="p-3 w-75 mb-5" />

         
       
        <Button variant="dark" className='rounded-pill px-5 py-3 fw-bold'>Apply Coupon</Button>
        
        </Col>
        
        <Col className='mb-5'>
        <h4>CART TOTALS</h4>
        <hr/>
       <div className='d-flex'>
        <p >Suntotal</p>
        <h6 className="fw-bold" style={{paddingLeft:"120px"}}>${gettotal()}</h6>
       </div>
       <div className='d-flex mb-5'>
        <p>Total</p>
        <h6  className="fw-bold" style={{paddingLeft:"145px"}}>${gettotal()}</h6>
       </div>
       <Button variant="dark" className='rounded-pill px-5 py-3 fw-bold' style={{marginBottom:"100px"}} onClick={goToCheckout}>Proceed To Checkout</Button>
        </Col>
      </Row>
    </Container>
    <div className='mb-5'></div>
  
    </div>
    
  )
}

export default Cart