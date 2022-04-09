import React from 'react'
import '@styles/Login.scss'
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form">
          <label for="emapil" className="label">
            Email address
          </label>
          <input type="emapil" id="emapil" placeholder="test@test.com" className="input" />
          <label for="new-password" className="label">
            Password
          </label>
          <input type="password" id="new-password" placeholder="*********" className="input input-password" />
          <input type="submit" value="Log in" className="primary-button login-button" />
          <a href="">Forgot my password</a>
        </form>
        <button className="secondary-button">Sign up</button>
      </div>
    </div>
  )
}

export default Login
