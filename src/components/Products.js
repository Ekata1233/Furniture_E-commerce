import React, { useEffect } from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Testimonials from './Testimonials';
function Products() {
    const [chairs,setChair]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        displyfur()
        getCart()
    },[])
    function displyfur(){
        fetch("http://localhost:3000/chairs").then((resp1)=>{
            resp1.json().then((resp2)=>{
                console.log(resp2)
                setChair(resp2)
            })
        })
    }

    function getCart()
    {
        fetch("http://localhost:3000/cart").then((resp1)=>{
            resp1.json().then((resp2)=>{
                console.log(resp2)
                setCart(resp2)
            })
        })
    }
    //add product 
    function addtocart(item){
       if(cart.find((c)=>c.id===item.id))
       {
        alert(item.name+" already added in ther cart")
       }
       else{
        fetch("http://localhost:3000/cart",
            {
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(item)
            }).then((resp1)=>{
                resp1.json().then((resp2)=>{
                    console.log(resp2)
                    getCart()
                    displyfur()
                })
            })
        
       }
    }
    //-------------------------------------------------------
  return (
    <div className=' bg-body-tertiary pt-5 pb-5' >
        <Container>
            <div className='row row-cols-1 row-cols-md-4 pt-5 mb-4 g-4'>
                {
                    chairs.map((item,index)=>{
                        return(                                                     
                            <div className='chair bg-body-tertiary' key={index} >   
                                                    
                                <Card style={{ width: '18rem' }} className='border-0 bg-body-tertiary pb-5'>                            
                            <div className='abc'>                                                        
                                <Card.Img variant="top" src={item.image} />
                            </div>                          
                                    <Card.Body>
                                     <Card.Title>{item.name}</Card.Title>
                                     <Card.Text>
                                       $ {item.price}.00
                                     </Card.Text>
                                    <Button variant="dark" className='rounded-circle fw-bold btn1'onClick={()=>addtocart(item)}>+</Button>
                                    </Card.Body>                        
                            </Card>
                            </div>                           
                        )
                    })
                }
            </div>
        </Container>
        
    </div>
  )
}

export default Products