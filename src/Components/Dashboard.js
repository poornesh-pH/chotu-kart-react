import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../style.css';
import Search from './Search';
import Products from './Products';
import {products} from '../json'

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      products : products,
      isAvailable: false,
      searchText: ''
    };
  }
  render() {
    const setValue = e => {
      if (e && e.target.type == 'checkbox' && e.target.checked) {
        this.setState({
          isAvailable: true
        });
      } else if (e && e.target.type == 'checkbox' && !e.target.checked) {
        this.setState({
          isAvailable: false
        });
      } else this.setState({ [e.target.name]: e.target.value });
    };

    const searchFilter = () => {
      return this.state.products.filter(product =>
        product.name.toLowerCase().includes(this.state.searchText.toLowerCase())
      );
    };

    const filteredArray = () => {
      if (this.state.isAvailable) {
        return searchFilter().filter(product => product.stocked);
      } else return searchFilter();
    };
    return (
      <div className="container">
        <Search setValue={setValue} />
        <Products products={filteredArray()} />
      </div>
    );
  }
}
