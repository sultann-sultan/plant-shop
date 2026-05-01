import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleContinueShopping = (e) => {
    e.preventDefault();
    if (onContinueShopping) onContinueShopping(e);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const calculateTotalCost = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>🛒 Shopping Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button className="get-started-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-img" />

              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-unit-price">Unit Price: ${item.price.toFixed(2)}</div>
                <div className="cart-item-total-price">
                  Total: ${calculateTotalCost(item)}
                </div>
              </div>

              <div className="quantity-controls">
                <button className="qty-btn" onClick={() => handleDecrement(item)}>−</button>
                <span className="qty-count">{item.quantity}</span>
                <button className="qty-btn" onClick={() => handleIncrement(item)}>+</button>
              </div>

              <button className="remove-btn" onClick={() => handleRemove(item)}>
                🗑 Delete
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <div className="cart-total">
              Total Amount: <span>${calculateTotalAmount()}</span>
            </div>
            <button className="continue-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button
              className="checkout-btn"
              onClick={() => alert('Coming Soon! 🌿')}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
