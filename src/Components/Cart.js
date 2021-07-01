import React from 'react';
import {connect} from 'react-redux';
function Cart(props) {
  console.log(props,"Cart Component")
  return (
    <div className="container">
      <h6>Cart</h6>
    </div>
  );
}
const filterProductsToCart = (products,cart) =>{
return products.find((item)=>item.id === cart.id)
}
const mapStateToProps =(state)=>{
  return{
    itemsInCart : filterProductsToCart(state.products,state.cart)
  }
}
export default connect(mapStateToProps)(Cart);