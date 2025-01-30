import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import logo from '../images/logo.png';
import './css/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();  // Initialize useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in:', userCredential.user);
            alert('Login successful!');
            navigate('/dashboard');  // Navigate to the dashboard
        } catch (err) {
            console.error('Login error:', err.message);
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <header>
                <div className="logo">
                    <img style={{ width: '200px' }} src={logo} alt="Pizza chic" />
                    <p>Welcome back! Please login to manage your restaurant.</p>
                </div>
            </header>

            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    {error && <p className="error">{error}</p>}
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
                    <button type="submit" className="btn-login">Login</button>
                    <div className="links">
                        <a href="#forgetPassword">Forgot Password?</a>
                        <a href="#signup">Create an Account</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
