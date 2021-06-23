import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import AdminBookList from './AdminBookList';

export default function Admin(props) {
  console.log(props, 'admin props');
  return (
    <div className="container">
      <br />
      {/* <Search products={props.products} /> */}
      <div className="row">
        <Link to="/add">
          <button className="btn waves-effect waves-light col s12">
            Add Books
          </button>
        </Link>
      </div>
      <AdminBookList />
    </div>
  );
}
