import React, { Component } from 'react'
import styled from "styled-components";
import {storedProducts} from "../data"
import {ProductConsumer} from '../context'
import Product from './Product'
import ProductReplica from './ProductReplica';
export default class ProductList extends Component {
    render() {
        return (
       <React.Fragment>
       <div className="py-5">
       <div className="container">
       <div className="row">
       <ProductConsumer>
       { 
         ob=>
           {
            console.log(ob)
            return ob.products.map(product=>{
                return <ProductReplica key={product.id} product={product}/>
            });  
           }
       }
       </ProductConsumer>
       </div>
       </div>
       </div>
       </React.Fragment>     
          
        );
    }
  }
