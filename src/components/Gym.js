import React from 'react'
import { Form } from 'react-bootstrap'

function Gym() {
    
  return (
    <body style={{color:"#6f42c1"}}>
        <h1  style={{display:"flex",justifyContent:"center"}}>Signup</h1>
    <Form.Control size="lg" type="text" placeholder="Large text"  style={{display:"flex",justifyContent:"center"}}/>
    <h1  style={{display:"flex",justifyContent:"center"}}>Gym</h1>
    <Form.Control size="lg" type="text" placeholder="Large text"  style={{display:"flex",justifyContent:"center"}}/>
    </body>
  )
  
}

export default Gym