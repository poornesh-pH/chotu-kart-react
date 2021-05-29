import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../style.css';
import Search from './Search';
import ProductList from './ProductList';
import Admin from './Admin';
import { products } from '../json';

export default class Customer extends Component {

  render() {
    // console.log(this.props, 'router props');
    
    return (
      <div className="container">
        {/* <Search setValue={setValue} /> */}
        {/* <ProductList products={filteredArray()} /> */}
        <p>Customer</p>
      </div>
    );
  }
}
