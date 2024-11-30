import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Ex: Jhone" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Ex: Doe" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email address" />
            </div>
            <div className="form-group">
              <label>
                Phone Number{" "}
                <span>(* Country Code Is Must Like For BD 880)</span>
              </label>
              <div className="phone-input">
                <select>
                  <option value="+91">+91</option>
                  <option value="+880">+880</option>
                  <option value="+1">+1</option>
                </select>
                <input type="tel" placeholder="Enter phone number" />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Minimum 8 characters long" />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Minimum 8 characters long" />
            </div>
          </div>

          <div className="form-group">
            <label>Refer Code (Optional)</label>
            <input type="text" placeholder="Use referral code" />
          </div>

          <div className="form-group">
            <label>
              <input type="checkbox" /> I agree to Your{" "}
              <a href="/">Terms and conditions</a>
            </label>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Enter captcha value" />
            </div>
            <div className="captcha-image">kjl</div>
          </div>

          <button type="submit" className="sign-up-button">
            Sign up
          </button>
          <p>
            Already have an account? <a href="/">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
