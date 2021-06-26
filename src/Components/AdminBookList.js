import React from 'react';
import {Link} from 'react-router-dom'

const AdminBookList = props => {
  return <div className="adminBookList">
  <Link to={`/edit/${props.book.id}`}>{props.book.name}</Link>
<a class="waves-effect waves-light btn-small"><i class="tiny material-icons right">delete</i>Delete</a>

  </div>;
};
export default AdminBookList;
