// src/components/SignupPage.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FirebaseConfig'; // Ensure the path is correct

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setError(''); // Reset error message before new signup attempt

    try {
      // Create a new user with the specified email and password
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to the login page after successful signup
      navigate('/login');
    } catch (err) {
      // Capture and set any error message
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <button onClick={() => navigate('/login')}>Log In</button></p>
    </div>
  );
}

export default SignupPage;
