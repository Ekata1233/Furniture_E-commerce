import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function Header()
{
  const[cart,setCart]=useState([])
  const[clen,seClen]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/cart").then((resp1)=>{
      resp1.json().then((resp2)=>{
          console.log(resp2)
          setCart(resp2)
      })
  })
  },[])
    return(
        <div>
 
        <Navbar data-bs-theme="secondary" className=' main ' expand='lg'>
        <Container>
          <Navbar.Brand href="#" className='fw-bold fs-2' style={{paddingRight:"500px"}}>Furni<span className='text-secondary'>.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
        
            <Link to="/" style={{color:"#ffffff80"}} className='px-5'>Home</Link>
            
            <Link to="/Shop"  style={{color:"#ffffff80"}}>Shop</Link>
            <Link to="/About"  style={{color:"#ffffff80",width:"150px"}}>About us</Link>
            <Link to="/Services"  style={{color:"#ffffff80"}}>Services</Link>
            <Link to="/Blog" style={{color:"#ffffff80"}}>Blog</Link>
            <Link to="/Contact"  style={{color:"#ffffff80" ,width:"150px"}} >contact us</Link>
            <Link to="/User" style={{color:"#ffffff80"}}><i class="fa-regular fa-user"></i></Link>
            <Link to="/Cart"  style={{color:"#ffffff80",width:"100px"}}><i class="fa-solid fa-cart-shopping"></i><sup>{cart.length}</sup></Link>
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}
export default Header