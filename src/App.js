import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';
import Admin from './Components/Admin';
import Cart from './Components/Cart';
import Customer from './Components/Customer';
import Header from './Components/Header';
import { products } from './json';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products
    };
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Customer products={this.state.products} />}
            />
            <Route
              path="/admin"
              render={props => <Admin products={this.state.products} />}
            />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
