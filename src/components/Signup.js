import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import "./css/Signup.css";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset error state

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up:", userCredential.user);
            alert("Signup successful!");
            navigate("/login"); // Redirect to login page after signup
        } catch (err) {
            console.error("Signup error:", err.message);
            setError(err.message);
        }
    };

    return (
        <div className="signin-container">
            <header>
                <div className="logo">
                    <img style={{ width: "200px" }} src={logo} alt="Pizza chic" />
                    <p>Create an account to manage your restaurant.</p>
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
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="btn-signin">Sign Up</button>
                    <div className="links">
                        <a href="/login">Already have an account? Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
