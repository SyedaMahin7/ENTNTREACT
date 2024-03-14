import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
// const BrowserRouter = require("react-router-dom").BrowserRouter;

// const Route = require("react-router-dom").Route;

// const Link = require("react-router-dom").Link;
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <div style={{ backgroundColor: 'gray', height: '100vh'}}>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/products" Component={ProductsManagement} />
          <Route path="/orders" Component={OrdersManagement} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;