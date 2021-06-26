import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProduct } from '../Redux/Actions/productsAction';

const AdminBookList = props => {
  return (
    <div className="adminBookList">
      <Link to={`/edit/${props.book.id}`}>{props.book.name}</Link>
      <a
        className="waves-effect waves-light "
        onClick={() => {
          props.dispatch(removeProduct(props.book.id));
        }}
      >
        Delete
      </a>
    </div>
  );
};
export default connect()(AdminBookList);
