import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, editCart } from '../Redux/Actions/cartAction';
import { editProduct } from '../Redux/Actions/productsAction';
import { Link } from 'react-router-dom';
function Cart({ itemsInCart, dispatch }) {
  const removingFromCart = item => {
    dispatch(removeFromCart(item.id));
    dispatch(editProduct({ id: item.id, ...item, inCart: false }));
  };
  const itemCounter = (id, count) => {
    itemsInCart.map(item => {
      if (item.id == id) {
        let itemCount = item.count + count;
        dispatch(editCart(id, itemCount));
      }
    });
  };
  return (
    <div className="container">
      {itemsInCart.length <= 0 ? (
        <p>No Items in Cart</p>
      ) : (
        itemsInCart.map(item => (
          <div className="itemsInCart" key={item.id}>
            <p>{item.name}</p>
            <button
              className="countButton"
              onClick={() => {
                itemCounter(item.id, -1);
              }}
              disabled={item.count == 1}
            >
              -
            </button>
            <p>{item.count}</p>
            <button
              className="countButton"
              onClick={() => {
                itemCounter(item.id, 1);
              }}
            >
              +
            </button>
            <p>{'₹' + ' ' + (item.price * item.count).toFixed(2)}</p>
            <a
              className="cartRemoveItem"
              onClick={() => removingFromCart(item)}
            >
              Remove
            </a>
          </div>
        ))
      )}
      {itemsInCart.length > 0 && (
        <Link to="/shipping">
          <button className="btn-small">Buy Now</button>
        </Link>
      )}
    </div>
  );
}
const filterProductsToCart = (products, cart) => {
  let filtered = [];
  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (cart[i].id == products[j].id)
        filtered.push({
          ...products[j],
          count: cart[i].count
        });
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
