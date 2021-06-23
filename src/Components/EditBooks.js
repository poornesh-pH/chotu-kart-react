import React from 'react';
import { connect } from 'react-redux';
const EditBooks = props => {
  // const editBook = props.books.filter(({id})=> id === props.match.params.id)
  // console.log(editBook,'editBook')
  console.log(props, 'edit');
  return (
    <div>
      <p>Edit Books</p>
    </div>
  );
};

const mapStateToProps = (state,props) => {
  return {
    book: state.products.filter(({id})=> id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(EditBooks);
