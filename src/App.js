import React from "react";
import  ReactDOM  from "react-dom";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import  About  from "./components/About";
import Login from "./components/Login";
// import Cart from "./components/Cart";
import {UserContext} from './components/Home';
import Signup from "./components/Signup";

const App = () => {
  return (
 

    <>
      {/* <Navbar /> */}
        



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
       
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
                  </Routes>
                  
      </>
  );
};

export default App;
