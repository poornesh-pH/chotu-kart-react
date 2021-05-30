import React from 'react';
import Search from './Search';

export default function Admin(props) {
  return (
    <div className="container">
      <Search products={props.products} />
    </div>
  );
}
