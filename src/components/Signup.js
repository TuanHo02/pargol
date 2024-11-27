import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent form default behavior
    setError(''); // Clear previous error message

    // Log values for debugging
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      // Attempt to create a new user using Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to the login page after successful signup
      navigate('/login');
    } catch (err) {
      // Handle and display errors (e.g., weak password, invalid email)
      if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('This email is already in use.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email format.');
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="signup-page">
      <h2>Create an Account</h2>

      {/* Display error message if there is any */}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSignUp}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      <p>Already have an account? <button onClick={() => navigate('/login')} className="login-link">Log In</button></p>
    </div>
  );
}

export default Signup;
