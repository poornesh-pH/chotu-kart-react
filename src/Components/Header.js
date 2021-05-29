import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import BuildIcon from '@material-ui/icons/Build';
import DashboardIcon from '@material-ui/icons/Dashboard';

export default function Header() {
  return (
    <div className="header">
      <title>Chotu Kart </title>
      <h5 className="logo">Chotu Kart</h5>

      <div className="navbar">
        <NavLink exact activeClassName="is-active" to="/">
          Dashboard <DashboardIcon color="primary" fontSize="small" />
        </NavLink>
        <NavLink activeClassName="is-active" to="/admin">
          Admin <BuildIcon color="primary" fontSize="small" />
        </NavLink>
        <NavLink activeClassName="is-active" to="/cart">
          Cart <ShoppingCartTwoToneIcon color="primary" fontSize="small" />
        </NavLink>
      </div>
    </div>
  );
}
