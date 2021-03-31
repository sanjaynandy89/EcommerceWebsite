import React,{Component} from "react";
//import {storedProducts} from "./data"
import axios from 'axios';
const ProductContext=React.createContext();
//Provider
//Consumer
class ProductProvider extends Component
{
    state={
        products:[],
        detailProd:{},
        cart:[],
    }
    componentDidMount()
    {  
      
        this.storedProducts();
    }
    storedProducts=()=>
    {  
        axios.get('http://127.0.0.1:5000/product')
      .then(res => {
        const storedProducts = res.data;
        console.log(storedProducts)
        let tempProducts=[];
        storedProducts.forEach(item=>{
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem];

        });
        this.setState(()=>{
         return {products:tempProducts};
        });

      })
        
    }
    getItem=id=>
    {
        const product=this.state.products.find(item=>item.id===id)
        return product
    }
    handleDetail=id=>
    {
        const product=this.getItem(id)
        console.log(product)
        this.setState(()=>
        {
            return {detailProd:product}
        }
        )
    }
    addToCart=(id)=>
    {
        console.log('Hello from Addtocart')
        let tempProducts=[...this.state.products]
        const index=tempProducts.indexOf(this.getItem(id))
        const product=tempProducts[index]
        product.inCart=true
        product.count=1
        const price=product.price
        this.setState(
            ()=>{
                return {products:tempProducts,cart:[...this.state.cart,product]}
            }
        )
    }
    render(){
        return(
            <ProductContext.Provider value={{...this.state,
            handleDetail:this.handleDetail,addToCart:this.addToCart}}>
            {
                this.props.children
            }
            </ProductContext.Provider>

        );
    }
}
const ProductConsumer=ProductContext.Consumer;
export {ProductProvider,ProductConsumer}