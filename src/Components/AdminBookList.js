import React from 'react';
import {Link} from 'react-router-dom'

const AdminBookList = props => {
  return <div>
  <Link to={`/edit/${props.book.id}`}>{props.book.name}</Link>
  </div>;
};
export default AdminBookList;
