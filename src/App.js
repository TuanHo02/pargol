import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Login from "./components/Login";  // Corrected to capitalized "Login"
import { auth } from "./FirebaseConfig";
import items from "./components/data"; // Static items for now

const App = () => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser !== null);

  // Check for auth status on app load
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user !== null);
    });

    return unsubscribe; // Clean up the listener when the component unmounts
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          {isLoggedIn ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome to our Cake Shop</h2>} />
          <Route path="/menu" element={<Menu items={items} cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/login" element={<Login setAuthenticated={setIsLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
