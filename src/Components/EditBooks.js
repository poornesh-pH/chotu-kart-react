import React from 'react';
import { connect } from 'react-redux';
import BooksForm from './BooksForm';
import {editProduct} from '../Redux/Actions/productsAction';
const EditBooks = props => {
  // console.log(props.book,"editbook")
  return (
    <div className="container">
      <h5>Edit Books</h5>
      <BooksForm onSubmit={(editedBook)=>{
        console.log(editedBook,"editedBook")
       props.dispatch(editProduct(editedBook),
       console.log("book edited"),
       props.history.push('/admin'))
      }}book={props.book} />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    book: state.products.filter(({ id }) => id === props.match.params.id)[0]
  };
};
export default connect(mapStateToProps)(EditBooks);
