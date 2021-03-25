import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Product from './Components/Product';
import Default from './Components/Default';
import Chart from './Components/Chart';
import Details from './Components/Details';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import ProductReplica from './Components/ProductReplica';
class App extends Component {
  render(){
  return (
    <React.Fragment>
      
      <Router>
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={ProductList}></Route>
      <Route path="/details" component={Details}></Route>
      <Route path="/products" component={ProductReplica}></Route>
      <Route path="/chart" component={Chart}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/login" component={Login}></Route>
      <Route component={Default}></Route>
      </Switch>
      </Router>
    </React.Fragment>

  );
}
}
export default App;
