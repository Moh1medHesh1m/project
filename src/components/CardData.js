import React from 'react'
import { Card ,Button,CardGroup} from 'react-bootstrap'
import { Col, Row } from "react-bootstrap";
 const CardData = (props) => {
  
  

  return (

    <Card style={{ width: '18rem' , borderRadius:"20px"}}>
      <Card.Img variant="top"  src={props.url} 
       style={{ height: "200px", objectFit: "contain" }}
      />
      <div style={{marginTop:"10px"}}></div>
      <Card.Body style={{background:"white", width:"100%",borderRadius:"20px"}}>
        <div style={{justifyContent:"center" ,display:"flex" ,fontSize:"20"}}>
        <strong>{props.name}</strong>
        </div>
        
          {(props.is_hot_deal === false) ? <div style={{background:"white",padding:"0"}}></div> :<div style={{background:"#28a745", justifyContent:"center" ,display:"flex",height:"20%",padding:"0%",margin:"0%"}}><strong style={{color:"white"}}>Hot Details</strong></div>}
        
        
        
      </Card.Body>
    </Card>
    // <Card className="h-100">
    // <Card.Img
    //   variant="top"
    //   src={props.url}
    //   style={{ height: "200px", objectFit: "cover" }}
    // />
    // <Card.Body className="d-flex flex-column">
    //   <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
    //     <span className="fs-2">{props.name}</span>
    //   </Card.Title>
    //   <div className="mt-auto" style={{background:"#20c997"}}>

      
    // </div>
         
       
     
  //   </Card.Body>
    
  // </Card>

   
  
    
  
  )
}
export default CardData

