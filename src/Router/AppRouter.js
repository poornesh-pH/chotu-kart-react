import React from 'react';

import Admin from './../Components/Admin';
import Cart from './../Components/Cart';
import Customer from './../Components/Customer';
import Header from './../Components/Header';
import AddBooks from './../Components/AddBooks';
import EditBooks from './../Components/EditBooks';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Customer} />
        <Route path="/admin" component={Admin} />
        <Route path="/cart" component={Cart} />
        <Route path="/add" component={AddBooks} />
        <Route exact path="/edit/:id" component={EditBooks}/>
      </Switch>
    </BrowserRouter>
  );
}
