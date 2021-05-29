import React, { Component } from 'react';
import Search from './Search';
import Products from './Products';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          category: 'Sporting Goods',
          price: '$49.99',
          stocked: true,
          name: 'Football'
        },
        {
          category: 'Sporting Goods',
          price: '$9.99',
          stocked: true,
          name: 'Baseball'
        },
        {
          category: 'Sporting Goods',
          price: '$29.99',
          stocked: false,
          name: 'Basketball'
        },
        {
          category: 'Electronics',
          price: '$99.99',
          stocked: true,
          name: 'iPod Touch'
        },
        {
          category: 'Electronics',
          price: '$399.99',
          stocked: false,
          name: 'iPhone 5'
        },
        {
          category: 'Electronics',
          price: '$199.99',
          stocked: true,
          name: 'Nexus 7'
        }
      ],
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
      <div>
        <Search setValue={setValue} />
        <Products products={filteredArray()} />
      </div>
    );
  }
}
