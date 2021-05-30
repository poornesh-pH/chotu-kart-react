import React, { Component } from 'react';
import ProductList from './ProductList';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      return this.props.products.filter(product =>
        product.name.toLowerCase().includes(this.state.searchText.toLowerCase())
      );
    };

    const filteredArray = () => {
      if (this.state.isAvailable) {
        return searchFilter().filter(product => product.stocked);
      } else return searchFilter();
    };
    return (
      <div className="search">
        <div class="input-field col s6">
          <input
            id="searchText"
            type="text"
            className="validate"
            name="searchText"
            onChange={setValue}
          />
          <label for="searchText">Search Books</label>
        </div>
        <div>
          <p>
            <label>
              <input type="checkbox" name="isAvailable" onChange={setValue} />
              <span>Show only available items</span>
            </label>
          </p>
        </div>
        <ProductList filteredProducts={filteredArray()} />
      </div>
    );
  }
}
