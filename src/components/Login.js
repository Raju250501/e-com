import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Sign In</h1>
        <form>
          <div className="form-group">
            <label>Email / Phone</label>
            <input type="text" placeholder="Enter email or phone" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <div className="form-group">
            <label>Captcha</label>
            <div className="captcha-box">
              <input type="text" placeholder="Enter captcha value" />
              <div className="captcha-image">⟲ IV1</div>
            </div>
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/">Forgot password?</a>
          </div>
          <button type="submit" className="sign-in-button">
            Sign in
          </button>
          <p>
            Enjoy New experience <a href="/">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
