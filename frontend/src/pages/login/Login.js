import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">
                    ShenSocial
                </h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Lamasocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" className="loginInput" />
                    <input type="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginFor">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login