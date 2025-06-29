import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;