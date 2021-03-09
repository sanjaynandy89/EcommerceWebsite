import { Button } from 'bootstrap'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-expand-sm">
            <div className="container-fluid">
              <div className="navbar-header">
              <Link to="/"  className="nav-link">
              <img src={logo} alt="Brand" className="navbar-brand"></img>
              </Link>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
        
                  <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Products <span class="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><Link to="/electronics" className="nav-link">Electonics</Link></li>
                      <li><Link to="/fashion" className="nav-link">Fashion</Link></li>
                      <li><Link to="/home" className="nav-link">Home</Link></li>
                    </ul>
                  </li>
                  <li><a href="#">Page 2</a></li>
                  <li><a href="#">Page 3</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-center">
                  <li><Link to="/signup" className="nav-link"><ButtonContainer>SignUp</ButtonContainer></Link></li>
                  <li><Link to="/login" className="nav-link"><ButtonContainer>Login</ButtonContainer></Link></li>
                  <li><Link to="/chart" className="nav-link"><ButtonContainer><i class="fa fa-shopping-cart"></i>MyChart</ButtonContainer></Link></li>
                </ul>
              </div>
            </div>
          </nav>
            
              
            
            
        )
    }
}
const ButtonContainer=styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
color:lightblue;
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover
{
  background:lightgreen;
  color:blue;

}
&:focus
{
  outline:none;
}
`;