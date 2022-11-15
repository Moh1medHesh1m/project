import React from 'react'
import {Nav,Navbar as NavbarBs , Container, Button, NavbarBrand} from "react-bootstrap"
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
        
        <Container>

            <NavbarBrand> <img src="imgs/download.png"  /></NavbarBrand>
            <Nav className='me-auto'>
           
                <Nav.Link to= "/" as= {NavLink} style={{color:"#5614cf"}}>
                    Home
                </Nav.Link>
                <Nav.Link to= "/about" as= {NavLink} style={{color:"#5614cf"}}>
                    About
                </Nav.Link>
                
            </Nav>
            <Nav.Link to= "/login" as= {NavLink} >
            <button type="button" class="btn btn-outline-danger">SignIn</button>
            </Nav.Link>
            <div style={{marginRight:"20px"}}></div>
            <Nav.Link to= "/signup" as= {NavLink} >
            
            <button type="button" class="btn btn-danger">Signup</button>
            </Nav.Link>
        
        </Container>
    </NavbarBs>
  )
}

export default Navbar