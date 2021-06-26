import React from 'react';
import BooksForm from './BooksForm';
import { connect } from 'react-redux';
import { addProduct } from '../Redux/Actions/productsAction';
const AddBooks = props => {
  return (
    <div className="container">
      <h5>Add Books</h5>
      <BooksForm
        onSubmit={newBook => {
          props.dispatch(addProduct(newBook));
          props.history.push('/admin');
        }}
      />
    </div>
  );
};
export default connect()(AddBooks);
