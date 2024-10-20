import React, { useState } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removetoCart } from "./cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removetoCart(id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>Qty: {item.quantity}</span>
              <span>Price: Rs. {item.price}</span>
              <span>Total: Rs. {item.price * item.quantity}</span>
              <button
                onClick={() => handleRemove(item.id)}
                className="remove-button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="cart-total">
        <h2>Total: Rs. {calculateTotal()}</h2>
      </div>
      <Link to="/checkout">Go to Checkout</Link>
    </div>
  );
};

export default Cart;
