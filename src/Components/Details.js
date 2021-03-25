import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>
                {
                const {id,company,price,img,inCart,title,info}=value.detailProd;
                console.log(title)
                return(

<div className="container py-5">

  <div className="row ">

    <div className="col-10 mx-auto col-md-6  my-3">
      <figure className="view overlay rounded z-depth-1 main-img">
      <img src={img}className="img-fluid z-depth-1"/>
      </figure>
      </div>
      <div className="col-10 mx-auto col-md-6  my-3">
      <h5>{title}</h5>
      <p className="mb-2 text-muted text-uppercase small">{company}</p>
      <p><span className="mr-1"><strong>${price}</strong></span></p>
      <p class="pt-1">{info}</p>
      <div class="table-responsive">
        <table class="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Model</strong></th>
              <td>{title}</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
              <td>Black</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
              <td>USA, Europe</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" class="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
      <button type="button" class="btn btn-light btn-md mr-1 mb-2"><i
          class="fa fa-shopping-cart pr-2"></i>Add to cart</button>
      </div>
      </div>
      </div>
                  
                );
                }
                }
            </ProductConsumer>
        )
    }
}
