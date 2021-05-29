import React from 'react';

export default function ProductList(props) {
  // console.log(props, 'product list props');
  return (
    <div>
      <h6>Shopping Goods</h6>
      <ul className="collection">
        {props.products.map(product => {
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
        {props.products.map(product => {
          if (product.category == 'Electronics') {
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
    </div>
  );
}
