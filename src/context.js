import React,{Component} from "react";
import {storedProducts} from "./data"
const ProductContext=React.createContext();
//Provider
//Consumer
class ProductProvider extends Component
{
    state={
        products:[],
        detailProd:{}
    }
    componentDidMount()
    {
        this.storedProducts();
    }
    storedProducts=()=>
    {  
        let tempProducts=[];
        storedProducts.forEach(item=>{
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem];

        });
        this.setState(()=>{
         return {products:tempProducts};
        });

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
    addToCart=()=>
    {
        console.log('Hello from Addtocart')
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