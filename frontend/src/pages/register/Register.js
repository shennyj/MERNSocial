import React from 'react'
import "./Register.css"
const Register = () => {
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
                        <input type="Username" className="loginInput" />
                        <input type="Email" className="loginInput" />
                        <input type="Password" className="loginInput" />
                        <input type="Password Again" className="loginInput" />
                        <button className="loginButton">Sign In</button>
                        <button className="loginRegisterButton">Log In</button>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Register