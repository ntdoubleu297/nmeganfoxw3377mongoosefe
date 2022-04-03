import React from "react";
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';
import './badbank3k.css';
import { useState } from 'react';




function NavBar(){


  
  
    
    function useHover() {
        const [hovering, setHovering] = useState(false)
        const onHoverProps = {
            onMouseEnter: () => setHovering(true),
            onMouseLeave: () => setHovering(false),
        }
                return [hovering, onHoverProps]
            }
    
            
                const [buttonAIsHovering, buttonAHoverProps] = useHover();
                const [buttonBIsHovering, buttonBHoverProps] = useHover();
                const [buttonCIsHovering, buttonCHoverProps] = useHover();
                const [buttonDIsHovering, buttonDHoverProps] = useHover();
                const [buttonEIsHovering, buttonEHoverProps] = useHover();
            


            
                
             
                
       

return(
<>

<Navbar bg="primary" variant="dark">
<Container>
<Navbar.Brand href="/">BadBank</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="/createaccount" {...buttonAHoverProps}>{buttonAIsHovering ? 'Click here to Create your Account' : 'Create Account'} </Nav.Link>
  <Nav.Link href="/login" {...buttonEHoverProps}>{buttonEIsHovering ? 'Click here to Login' : 'Login'}</Nav.Link> 
  <Nav.Link href="/deposit" {...buttonBHoverProps}>{buttonBIsHovering ? 'Click here to make a Deposit' : 'Deposit/Withdraw'}</Nav.Link>
  
</Nav>
</Container>
</Navbar>
<div id='content'></div>
    
 
</>

);

}


        

export default NavBar;
