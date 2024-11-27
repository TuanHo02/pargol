  import React, { useState } from 'react';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../FirebaseConfig';
  import { useNavigate } from 'react-router-dom'; // Import useNavigate

  // Import logo image
  import logo from '../components/logo.jpg'; // Adjust the path to where your logo is

  function Login({ setAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    // Handle login logic
    const handleSignIn = async (e) => {
      e.preventDefault();
      setError(''); // Clear previous error
      try {
        // Attempt to sign in using Firebase auth
        await signInWithEmailAndPassword(auth, email, password);
        setAuthenticated(true); // Update parent state to reflect the user is authenticated
        navigate('/'); // Navigate to the homepage or dashboard after successful login
      } catch (err) {
        // Handle errors (e.g., wrong email/password)
        console.error(err);
        if (err.code === 'auth/user-not-found') {
          setError('No user found with this email address.');
        } else if (err.code === 'auth/wrong-password') {
          setError('Incorrect password. Please try again.');
        } else if (err.code === 'auth/invalid-email') {
          setError('Invalid email address format.');
        } else {
          setError('Login failed. Please try again.');
        }
      }
    };

    return (
      <div className="login-page">
        {/* Logo */}
        <img src={logo} alt="Logo" className="login-logo" />

        <h2>Login</h2>

        {/* Display error message if there is any */}
        {error && <p className="error-message">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleSignIn}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>

        {/* Button to navigate to the signup page */}
        <div>
          <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    );
  }

  export default Login;
