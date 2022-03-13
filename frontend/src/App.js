import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import data from './data';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return(
    <BrowserRouter>
    <div>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu} className="brand-button">&#9776;</button>
          <a href="index.html">FASTBUY</a>
        </div>
        <div className="header-links">
          <a href="cart.html"> Cart </a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close" onClick={closeMenu}> x</button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>
        <li>
          <a href="index.html">Shirts</a>
        </li>
      </ul>
    </aside>
    <main className="main">
        <div className="contents">
        <Route path="/products/:id" component={ProductScreen}/>
          <Route path="/"exact={true} component={HomeScreen}/>
          
        </div>
      </main>
      </div>
      <footer className="footer">All Rights Reserved</footer>   
      </div>
      </BrowserRouter>
  );
}

export default App;
