import React, { useState } from "react";
import "./Checkout.css";
const Checkout = () => {
  // State for form fields
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [orderSummary, setOrderSummary] = useState({
    items: [
      { id: 1, name: "Product A", price: 29.99, quantity: 1 },
      { id: 2, name: "Product B", price: 49.99, quantity: 2 },
    ],
    total: 0,
  });

  // Calculate total
  const calculateTotal = () => {
    const total = orderSummary.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setOrderSummary({ ...orderSummary, total });
  };

  // Handle change for shipping info
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  // Handle change for payment info
  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would send the payment and shipping info to your backend or payment processor
    console.log("Shipping Info:", shippingInfo);
    console.log("Payment Info:", paymentInfo);
    alert("Order placed successfully!");
  };

  // Calculate total whenever the component mounts
  useState(() => {
    calculateTotal();
  }, []);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* Shipping Information */}
        <h3>Shipping Information</h3>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={shippingInfo.fullName}
            onChange={handleShippingChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={handleShippingChange}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleShippingChange}
            required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={shippingInfo.state}
            onChange={handleShippingChange}
            required
          />
        </div>
        <div>
          <label>Zip Code:</label>
          <input
            type="text"
            name="zip"
            value={shippingInfo.zip}
            onChange={handleShippingChange}
            required
          />
        </div>

        {/* Payment Information */}
        <h3>Payment Information</h3>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handlePaymentChange}
            required
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            value={paymentInfo.expiryDate}
            onChange={handlePaymentChange}
            required
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="password"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handlePaymentChange}
            required
          />
        </div>

        {/* Order Summary */}
        <h3>Order Summary</h3>
        <ul>
          {orderSummary.items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <p>Total: ${orderSummary.total.toFixed(2)}</p>

        {/* Submit Button */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
