import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from '././Components/Admin';
import Cart from '././Components/Cart';
import Customer from '././Components/Customer';

const AppRouter = () => {
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Customer} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </BrowserRouter>;
};
