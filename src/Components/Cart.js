import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Redux/Actions/cartAction';
import { editProduct } from '../Redux/Actions/productsAction';

function Cart({ itemsInCart, dispatch }) {
  const removingFromCart = item => {
    dispatch(removeFromCart(item));
    dispatch(editProduct({ id: item.id, ...item, inCart: false }));
  };
  return (
    <div className="container">
      {itemsInCart.length <= 0 ? (
        <p>No Items in Cart</p>
      ) : (
        itemsInCart.map(item => (
          <div className="itemsInCart" key={item.id}>
            <p>{item.name}</p>
            <button className="countButton">-</button><p>{0}</p>
            <button className="countButton">+</button>
            <a
              className="cartRemoveItem"
              onClick={() => removingFromCart(item)}
            >
              Remove
            </a>
          </div>
        ))
      )}
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
