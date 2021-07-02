import React from 'react';
import { connect } from 'react-redux';
import {handleRemoveFromCart} from './BooksCards'
function Cart({ itemsInCart }) {
  return (
    <div className="container">
      {itemsInCart.map(item => (
        <div className="itemsInCart">
          <p>{item.name}</p>
          {/* <a className="cartRemoveItem" onClick={()=>handleRemoveFromCart(item)}>Remove</a> */}
        </div>
      ))}
    </div>
  );
}
const filterProductsToCart = (products, cart) => {
  let filtered = [];
  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (cart[i] == products[j].id) filtered.push(products[j]);
    }
  }
  return filtered;
};
const mapStateToProps = state => {
  return {
    itemsInCart: filterProductsToCart(state.products, state.cart)
  };
};
export default connect(mapStateToProps)(Cart);
