// src/components/Cart.js
import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <button onClick={() => alert("Proceeding to checkout")}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
