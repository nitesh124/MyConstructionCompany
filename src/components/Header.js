import React, {Component} from 'react';
import '../App.css';
import {Navbar} from 'react-bootstrap';
import Logo from '/Users/niteshvarma/Desktop/dharanidevelopers/src/logo.png';
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Link, BrowserRouter } from 'react-router-dom';
import  Main  from './Main';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
class Header extends Component {
render(){
  return (
    <div className="bg">
    <img classname="logo" src={Logo} width={150} height={80} mode='fit' style={{paddingTop:16}}/>
    <Navbar classname="navbar" collapseOnSelect expand="lg">
    <ul className="navbar-ul">
      <BrowserRouter>
      <li><Link className="navbar-a" to={"/About"} >About</Link></li>
      <li><Link className="navbar-a" to={"/Contact"}>Contact</Link></li>
      <li><Link className="navbar-a" to={"/Projects"}>Projects</Link></li>
      <li><Link className="navbar-a" to={"/Header"}>Home</Link></li>
      </BrowserRouter>
    </ul>
   </Navbar>
   <Bounce>
     <h1 className="h1">Make Your</h1>
     <h1 className="h2">Dream</h1>
     <h1 className="h1">WorkSpace Now</h1>   
   </ Bounce>
    </div>
  
  
  );
}
}

export default Header;
