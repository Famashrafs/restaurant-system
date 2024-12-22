import React, { useState } from 'react';
import logo from "../images/logo.png"
import './css/Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Handle sign-up logic here (for now, just console log)
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="signin-container">
            <header>
            <div className="logo">
                    <img style={{width:"200px"}} src={logo} alt='Pizza chic'/>
                    <p>Welcome back! Please login to manage your restaurant.</p>
                </div>
            </header>

            <div className="signin-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn-signin">Sign Up</button>
                    <div className="links">
                        <a href="#">Already have an account? Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
