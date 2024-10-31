// src/components/Login.js
/*
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FirebaseConfig'; // Import auth from firebase

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect or do something after successful login
        } catch (err) {
            setError(err.message); // Set error message on failure
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
*/

// src/components/Login.js

import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate regular email/password login here if needed
    };

    const handleTouchID = async () => {
        if (!window.PublicKeyCredential) {
            alert("WebAuthn not supported in this browser");
            return;
        }

        // Fetch login options from your server
        const response = await fetch('/api/login');
        const options = await response.json();

        options.publicKey.challenge = Uint8Array.from(atob(options.publicKey.challenge), c => c.charCodeAt(0));
        options.publicKey.allowCredentials = options.publicKey.allowCredentials.map(cred => {
            return {
                id: Uint8Array.from(atob(cred.id), c => c.charCodeAt(0)),
                type: 'public-key',
            };
        });

        try {
            const assertion = await navigator.credentials.get({ publicKey: options.publicKey });

            // Send assertion to your server for verification
            const result = await fetch('/api/login/complete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(assertion),
            });

            if (result.ok) {
                alert("Login successful!");
            } else {
                alert("Login failed!");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <button type="button" onClick={handleTouchID}>Login with Touch ID</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
