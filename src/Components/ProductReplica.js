import React, { Component } from 'react'
import styled from "styled-components";
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
export default class ProductReplica extends Component {
    render() {
       const {id,title,img,price,discount,inCart}=this.props.product;
        return (
       
           <ProductConsumer> 
           {value=>(  
           <ProductWrapper className="col-md-3 col-sm-6">      
           <div className="product-grid">
           <div className="product-image" onClick={()=>value.handleDetail(id)}>
               <Link to="/details" >
               <img src={img}/>  
               </Link>
            <span class="product-discount-label">-{discount}</span>
            </div>
            <div className="product-content">
            <h3 class="title"><a href="#">{title}</a></h3>
            <div class="price"><span>${price}.00</span> ${parseInt(price*((100-discount)/100))}.00</div>
            <Link to="/cart">
            <button className="add-to-cart"  disabled={inCart?true:false} onClick={()=>{value.addToCart(id)}}>
            {inCart?(
            <p disabled>{" "}GoToChart</p>
            )
            :
            (
            <p >add to cart</p>
            )}
            </button>
            </Link>
             </div>
             </div>
             </ProductWrapper>
             )}
             
               
             </ProductConsumer>  
             
    

      
        );
    }
  }
const ProductWrapper=styled.div`
.product-grid{
    font-family: 'Poppins', sans-serif;
    text-align: center;
    border-radius: 15px;
    border: 1px solid #e7e7e7;
    overflow: hidden;
    transition: all 0.4s ease-out;
}
.product-grid:hover{ box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.1); }
.product-grid .product-image{ position: relative; }
.product-grid .product-image a.image{ display: block; }
.product-grid .product-image img{
    width: 100%;
    height: auto;
}
.product-grid .product-discount-label{
    color: #fff;
    background: #78a206;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 2px 8px;
    border-radius: 5px;
    position: absolute;
    top: 12px;
    left: 12px;
}
.product-grid .product-links{
    width: 145px;
    padding: 0;
    margin: 0;
    list-style: none;
    opacity: 0;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    top: 65%;
    left: 50%;
    transition: all 0.4s ease 0s;
}
.product-grid:hover .product-links{
    opacity: 1;
    top: 50%;
}
.product-grid .product-links li{
    display: inline-block;
    margin: 0 2px;
}
.product-grid .product-links li a{
    color: #2c2c2c;
    background: #fff;
    font-size: 16px;
    line-height: 42px;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    display: block;
    position: relative;
    transition: all 0.4s ease-out 0s;
}
.product-grid .product-links li a:hover{
    color: #fff;
    background: #78a206;
    box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.2);
}
.product-grid .product-links li a:before,
.product-grid .product-links li a:after{
    content: attr(data-tip);
    color: #fff;
    background-color: #555;
    font-size: 12px;
    line-height: 18px;
    padding: 5px 10px;
    white-space: nowrap;
    display: none;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: -40px;
    transition: all 0.3s ease 0s;
}
.product-grid .product-links li a:after{
    content: '';
    height: 10px;
    width: 10px;
    padding: 0;
    transform: translateX(-50%) rotate(45deg);
    top: -18px;
    z-index: -1;
}
.product-grid .product-links li a:hover:before,
.product-grid .product-links li a:hover:after{
    display: block;
}
.product-grid .product-content{
    padding: 12px 12px 15px;
    position: relative;
}
.product-grid .rating{
    padding: 0;
    margin: 0 0 8px;
    list-style: none;
}
.product-grid .rating li{
    color: #78a206;
    font-size: 14px;
}
.product-grid .rating .far{ color: #808080; }
.product-grid .title{
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 15px;
}
.product-grid .title a{
    color: #2c2c2c;
    transition: all 0.3s ease 0s;
}
.product-grid .title a:hover{ color: #78a206; }
.product-grid .price{
    color: #78a206;
    font-size: 17px;
    font-weight: 600;
    display: block;
    transition: all 0.4s ease-in-out;
}
.product-grid .price span{
    color: #999;
    font-weight: 500;
    text-decoration: line-through;
}
.product-grid:hover .price{ opacity: 0; }
.product-grid .add-to-cart{
    color: #fff;
    background-color: #78a206;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 40px;
    width: 140px;
    height: 40px;
    border-radius: 50px;
    opacity: 0;
    transform: translateX(-50%);
    position: absolute;
    bottom: 50px;
    left: 50%;
    transition: all .4s ease-out;
}
.product-grid .add-to-cart:hover{ background-color: #2f2f2f; }
.product-grid:hover .add-to-cart{
    opacity: 1;
    bottom: 8px;
}
@media screen and (max-width:1200px){
    .product-grid{ margin: 0 0 30px; }
`;   