import React from 'react';
import './style.css';
import 'materialize-css/dist/css/materialize.min.css';
import Dashboard from './Components/Dashboard';
import AppRouter from './Router/AppRouter';
export default function App() {
  return (
    <div className="container">
      <h5>Chotu Kart </h5>
      <title>Chotu Kart </title>
      <AppRouter />
      <Dashboard />
    </div>
  );
}
