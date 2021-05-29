import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Build from '@material-ui/icons/Build';
import Dashboard from '@material-ui/icons/Dashboard';

export default function Header() {
  return (
    <div className="header">
      <title>Chotu Kart </title>
      <h5 className="logo">Chotu Kart</h5>

      <div className="navbar">
        <NavLink exact activeClassName="is-active" to="/">
          Dashboard <Dashboard color="primary" />
        </NavLink>
        <NavLink activeClassName="is-active" to="/admin">
          Admin <Build color="primary" />
        </NavLink>
        <NavLink activeClassName="is-active" to="/cart">
          Cart <ShoppingCartIcon color="primary" />
        </NavLink>
      </div>
    </div>
  );
}
