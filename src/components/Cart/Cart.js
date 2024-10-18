import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pizza", price: 500, quantity: 1 },
    { id: 2, name: "Burger", price: 200, quantity: 2 },
    { id: 3, name: "Pasta", price: 300, quantity: 1 },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
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
    </div>
  );
};

export default Cart;
