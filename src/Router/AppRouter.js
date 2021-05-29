import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './../Components/Admin';
import Cart from './../Components/Cart';
import Dashboard from './../Components/Dashboard';

export default function AppRouter() {
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/admin" component={Admin} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </BrowserRouter>;
}
