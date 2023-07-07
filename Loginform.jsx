import React, { useState } from "react";
import './Login.css'
const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    emailPhone: "",
    otp: "",
    loginOption: "otp",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(loginData);
  };

  const handleSendOTP = () => {
    // Handle sending OTP logic here
    console.log("OTP sent!");
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {loginData.loginOption === "otp" && (
        <div>
          <label htmlFor="emailPhone">Email/Phone:</label>
          <input
            type="text"
            name="emailPhone"
            value={loginData.emailPhone}
            onChange={handleChange}
            required
          />
        </div>
      )}
      {loginData.loginOption === "otp" && (
        <div>
          <button onClick={handleSendOTP}>Send OTP</button>
        </div>
      )}
      {loginData.loginOption !== "otp" && (
        <div>
          <label htmlFor="emailPhone">Email:</label>
          <input
            type="email"
            name="emailPhone"
            value={loginData.emailPhone}
            onChange={handleChange}
            required
          />
        </div>
      )}
      {loginData.loginOption !== "otp" && (
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="otp"
            value={loginData.otp}
            onChange={handleChange}
            required
          />
        </div>
      )}
      <div>
        <label htmlFor="loginOption">Login with:</label>
        <select
          name="loginOption"
          value={loginData.loginOption}
          onChange={handleChange}
        >
          <option value="otp">OTP</option>
          <option value="password">Password</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};


export default LoginForm;
