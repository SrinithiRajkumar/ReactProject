import React from 'react';
import './ReactLogin.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ReactLogin = () => {
  return (
    <div className="wrapper">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <Link to='/chatbot'><button type="submit">Login</button></Link>
            <div className="register-link">
                <p>Don't have an account? <Link to='/signin'>Sign Up</Link></p>
            </div>
        </form>

    </div>
  );
}

export default ReactLogin;