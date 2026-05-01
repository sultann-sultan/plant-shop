import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function Navbar({ setPage }) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#" onClick={() => setPage('home')}>
        Paradise <span>Nursery</span>
      </a>
      <ul className="navbar-links">
        <li><a href="#" onClick={() => setPage('home')}>Home</a></li>
        <li><a href="#" onClick={() => setPage('plants')}>Plants</a></li>
        <li><a href="#" onClick={() => setPage('about')}>About Us</a></li>
        <li>
          <div className="cart-icon-wrapper" onClick={() => setPage('cart')}>
            🛒
            {totalCount > 0 && (
              <span className="cart-badge">{totalCount}</span>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

function LandingPage({ setPage }) {
  return (
    <div className="landing-page background-image">
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <p className="landing-eyebrow">Welcome to</p>
        <h1 className="landing-title">
          Paradise <span>Nursery</span>
        </h1>
        <p className="landing-subtitle">
          Bring nature indoors. Discover handpicked houseplants that transform
          your space into a living, breathing sanctuary.
        </p>
        <button className="get-started-btn" onClick={() => setPage('plants')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Navbar setPage={setPage} />
      {page === 'home'   && <LandingPage setPage={setPage} />}
      {page === 'plants' && <ProductList setPage={setPage} />}
      {page === 'cart'   && <CartItem setPage={setPage} />}
      {page === 'about'  && <AboutUs />}
    </>
  );
}

export default App;
