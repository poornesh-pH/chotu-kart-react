import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './../Components/Admin';
import Cart from './../Components/Cart';
import Dashboard from './../Components/Dashboard';
import Header from './../Components/Header';
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/admin" component={Admin} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}
