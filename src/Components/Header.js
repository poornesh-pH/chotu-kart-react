import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div className="header">
      <title>Chotu Kart </title>
      <h5 className="logo">Chotu Kart </h5>
      <div className="navbar">
        <NavLink exact activeClassName="is-active" to="/">
          Dashboard
        </NavLink>
        <NavLink activeClassName="is-active" to="/admin">
          Admin
        </NavLink>
        <NavLink activeClassName="is-active" to="/cart">
          Cart
        </NavLink>
      </div>
    </div>
  );
}
