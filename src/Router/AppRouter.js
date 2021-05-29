import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './../Components/Admin';
import Cart from './../Components/Cart';
import Customer from './../Components/Customer';
import Header from './../Components/Header';
import Search from './../Components/Search';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Customer} />
        <Route path="/admin" component={Admin} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}
