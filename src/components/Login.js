import React, { useState } from 'react';
import logo from "../images/logo.png"
import "./css/Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (for now, just console log)
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <header>
                <div className="logo">
                    <img style={{width:"200px"}} src={logo} alt='Pizza chic'/>
                    <p>Welcome back! Please login to manage your restaurant.</p>
                </div>
            </header>

            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email or Username"
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
                        <a href="#">Forgot Password?</a>
                        <a href="#">Create an Account</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
