import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rePassword, setRePassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            // Handle signup logic here
            console.log('Sign Up:', { firstName, middleName, lastName, email, password, rePassword });
        } else {
            // Handle login logic here
            console.log('Login:', { email, password });
        }
        // Navigate to the e-commerce page
        navigate('/ecommerce');
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>{isSignup ? 'Create Account' : 'Login'}</h2>

                {isSignup && (
                    <>
                        <div className="input-group">
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="middleName">Middle Name</label>
                            <input 
                                type="text" 
                                id="middleName" 
                                value={middleName} 
                                onChange={(e) => setMiddleName(e.target.value)} 
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)} 
                                required 
                            />
                        </div>
                    </>
                )}

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>

                {isSignup && (
                    <div className="input-group">
                        <label htmlFor="rePassword">Re-enter Password</label>
                        <input 
                            type="password" 
                            id="rePassword" 
                            value={rePassword} 
                            onChange={(e) => setRePassword(e.target.value)} 
                            required 
                        />
                    </div>
                )}

                <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>

                {!isSignup && (
                    <>
                        <div className="divider">or</div>

                        <button 
                            type="button" 
                            className="social-login google" 
                            onClick={() => console.log('Continue with Google')}
                        >
                            Continue with Google
                        </button>
                        <button 
                            type="button" 
                            className="social-login facebook" 
                            onClick={() => console.log('Continue with Facebook')}
                        >
                            Continue with Facebook
                        </button>
                        <button 
                            type="button" 
                            className="social-login linkedin" 
                            onClick={() => console.log('Continue with LinkedIn')}
                        >
                            Continue with LinkedIn
                        </button>
                    </>
                )}

                <p className="toggle-link">
                    {isSignup ? 'Already have an account?' : "Don't have an account?"} 
                    <a href="#toggle" onClick={() => setIsSignup(!isSignup)}>
                        {isSignup ? ' Login' : ' Create Account'}
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;
