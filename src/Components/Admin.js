import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import AdminBookList from './AdminBookList';
import { connect } from 'react-redux';

const Admin = props => {
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
      {props.books.map(book => (
        <AdminBookList key={book.id} book={book} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    books: state.products
  };
};

export default connect(mapStateToProps)(Admin);
