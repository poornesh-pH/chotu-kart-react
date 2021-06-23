import React from 'react';
import { connect } from 'react-redux';
import BooksForm from './BooksForm';
const EditBooks = props => {
  console.log(props.book,"editbook")
  return (
    <div className="container">
      <h5>Edit Books</h5>
      <BooksForm book={props.book} />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    book: state.products.filter(({ id }) => id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(EditBooks);
