import React from 'react';
import Search from './Search';
import Products from './Products';

export default function Admin(props) {
  console.log(props)
  return (
    <div className="container">
    <Search />
    {/* <Products /> */}
    </div>
  );
}
