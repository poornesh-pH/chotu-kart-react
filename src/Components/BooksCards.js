import React from 'react';
import { connect } from 'react-redux';
import { addToCart,removeFromCart } from '../Redux/Actions/cartAction';
import { editProduct } from '../Redux/Actions/productsAction';
const BooksCards = props => {
  const handleAddToCart = item => {
    props.dispatch(addToCart(item));
    props.dispatch(editProduct({ id: item.id, ...item, inCart: true }));
  };
const handleRemoveFromCart = item =>{
    props.dispatch(removeFromCart(item))
    props.dispatch(editProduct({ id: item.id, ...item, inCart: false }));
  }
  return (
    <div className="row card-container">
      {/* change orientation */}
      {props.books.map(item => (
        <div className="col l4 s12 m6" key={item.id}>
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={item.img} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {item.name}
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                {item.inCart ? (
                  <a onClick={() => handleRemoveFromCart(item)}>
                    Remove from Cart
                  </a>
                ) : (
                  <a onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </a>
                )}
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                {item.name}
                <i className="material-icons right">close</i>
              </span>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    books: state.products
  };
};
export default connect(mapStateToProps)(BooksCards);
