import React from 'react';
import ProductList from './ProductList';

export default function Products(props) {
  // console.log(props,"products props")
  return (
    <div>
      <div className="heading">
        <h5>Name</h5>
        <h5>Price</h5>
      </div>
      <ProductList products={props.products} />
    </div>
  );
}
