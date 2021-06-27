import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../style.css';
import Search from './Search';
import ProductList from './ProductList';
import Admin from './Admin';
import { products } from '../json';
import BooksCards from './BooksCards';
export default class Customer extends Component {
  render() {
    return (
      <div className="container">
        {/* <Search products={this.props.products} /> */}
        <BooksCards />
      </div>
    );
  }
}
