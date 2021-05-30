import React from 'react';

export default function ProductList(props) {
  // console.log(props, 'product list props');
  return (
    <div>
      <div className="heading">
        <h5>Name</h5>
        <h5>Price</h5>
      </div>
      <h6>Shopping Goods</h6>
      <ul className="collection">
        {props.filteredProducts.map(product => {
          if (product.category == 'Sporting Goods') {
            return (
              <div key={product.name.toString()}>
                <li className="collection-item">
                  {product.name}
                  <div className="secondary-content">{product.price}</div>
                </li>
              </div>
            );
          }
        })}
      </ul>
      <h6>Electronics</h6>
      <ul className="collection">
        {props.filteredProducts.map(product => {
          if (product.category == 'Electronics') {
            return (
              <div key={product.name.toString()}>
                <li className="collection-item">
                  {product.name}
                  <div className="secondary-content">{product.price}</div>
                  <div>add to cart </div>
                </li>
              </div>
            );
          }
        })}
      </ul>
      <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
    </div>
  );
}
