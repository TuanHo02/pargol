import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom"; // Added Navigate for redirecting
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProfilePage from "./components/ProfilePage";
import { auth } from "./FirebaseConfig";
import items from "./components/data"; // Static items for now
import logo from "./components/logo.jpg"; // Import logo image
import './App.css'; 

const App = () => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser !== null);

  // Update the document title
  useEffect(() => {
    document.title = "My Cake Shop"; // Change this to the desired title
  }, []);

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
        {/* Navbar - Links as buttons */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          {isLoggedIn ? (
            <>
              {/* Show Profile link only when logged in */}
              <Link to="/profile">Profile</Link>
            </>
          ) : (
            <>
              {/* Show Login link when user is not logged in */}
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </nav>

        {/* Main content */}
        <main>
          <Routes>
            {/* Routes for unauthenticated users */}
            <Route path="/" element={
              <div>
                <h2>Welcome to our Cake Shop</h2>
                {/* Display the logo below the welcome message */}
                <img src={logo} alt="Cake Shop Logo" style={{ width: '950px', marginTop: '20px' }} />
              </div>
            } />
            <Route path="/menu" element={<Menu items={items} cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/login" element={<Login setAuthenticated={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Route for Profile - only accessible if logged in */}
            <Route
              path="/profile"
              element={
                isLoggedIn ? <ProfilePage setAuthenticated={setIsLoggedIn} /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
