import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { IconName } from "react-icons/fa"

export default function Login() {
  return (
   
    <div className="center">
         <h1>SIGN IN</h1>
         <button className="buttonClass">
        <i className="fa fa-facebook blue-color" aria-hidden="true"></i> <span className="buttonText">CONTINUE WITH
            FACEBOOK</span>
    </button>
    <div style={{margin:"20px"}}></div>
    <button className="buttonClass">
        <i className='fa fa-twitter blue-color'></i> <span className="buttonText">CONTINUE WITH TWITTER</span>
    </button>
    <div style={{margin:"20px"}}></div>
    <button className="buttonClass">
       <i className='fa fa-google red-color'></i> <span className="buttonText">CONTINUE WITH GOOGLE</span>
     </button>
     <div style={{margin:"20px"}}></div>

     <button className="buttonClass">
         <i className='fa fa-apple black-color'></i> <span className="buttonText">CONTINUE WITH APPLE</span>
    </button>
    <div style={{margin:"20px"}}></div>

    <div><span className="line"></span> Or<span className="line"></span></div>


    <Form  style={{width:"40%"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{display: "flex" }}>Phone</Form.Label>
        <Form.Control type="Tel" placeholder="+20" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{display: "flex" }}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
    // <div className="center">
    // <h1>SIGN IN</h1>
    
    // <button className="buttonClass">
    //     <i className="fa fa-facebook blue-color" aria-hidden="true"></i> <span className="buttonText">CONTINUE WITH
    //         FACEBOOK</span>
    // </button>
    // <button className="buttonClass">
    //     <i className='fa fa-twitter blue-color'></i> <span className="buttonText">CONTINUE WITH TWITTER</span>
    // </button>
    // <button className="buttonClass">
    //     <i className='fa fa-google red-color'></i> <span className="buttonText">CONTINUE WITH GOOGLE</span>
    // </button>
    // <button className="buttonClass">
    //     <i className='fa fa-apple black-color'></i> <span className="buttonText">CONTINUE WITH APPLE</span>
    // </button>

    // <div><span className="line"></span> Or<span className="line"></span></div>
    
    // <form>
        
        // <div className="form-group">
        //   <label for="exampleInputPhone" style="display: flex">Phone</label>
        //   <input type="tel" class="form-control" id="exampleInputPhone"  placeholder="+20" />    
        // </div>
    //     <div className="form-group">
    //       <label for="exampleInputPassword1" style="display: flex">Password</label>
    //       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          
    //     <button type="submit" class="btn btn-primary">Submit</button>
    //     </div>
    //   </form>
      
// </div>

  )
}
