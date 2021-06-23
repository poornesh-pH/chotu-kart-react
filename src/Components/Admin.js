import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import AdminBookList from './AdminBookList';

export default function Admin(props) {
  console.log(props, 'admin props');
  return (
    <div className="container">
      {/* <Search products={props.products} /> */}
      <Link to="/add">Add</Link>
      <AdminBookList />
    </div>
  );
}
