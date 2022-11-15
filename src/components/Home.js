import React from 'react'
import  CardData  from './CardData'
import { Col, Row } from "react-bootstrap";
import { createContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export  const UserContext = createContext()

const Home = () => {
  
    const [allMemes,setAllMemes]= React.useState([])
    const [cart,setCart]= React.useState([])
    const [count,setCount]=React.useState(1)
  
    const names = {name:"hesham"}
   
    React.useEffect( () => {
        fetch(`https://staging.algym.com/api/v1/gyms?page_number=${count}&page_size=1000`)
            .then(res => res.json())
            .then(data => setAllMemes(data.data))
    }, [])
    console.log(allMemes)
  //  co
  // cnsole.log(...allMemes)
   const handleclick = (item)=>{
    // cart.push(item.name)
    // console.log(cart)
  //   setCart(item.name)
  // console.log(cart)
  }

  return (
    <>
    <Navbar/>

<div class="wrap">
   <div class="search">
    <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
      <button type="submit" class="searchButton" placeholder='s'>
        Find Gym
     </button>
   </div>
</div>


    <Row md={2} xs={1} lg={3} className="g-3">
    { allMemes.map(items  => (
      <Col >
       <CardData
        
        url = {items.logo_img_url}
        is_hot_deal = {items.is_hot_deal}
        name = {items.name}
        
        
        />
      </Col>
    ))}

  </Row>
{/* <Pagination/> */}

<Footer/>


  </>
      
     
  )
 
}

export default Home

