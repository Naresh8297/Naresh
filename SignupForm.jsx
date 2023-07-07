import React, { useState } from "react";
import "./Signup.css";


const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneEmail: "",
    otp: "",
    city: "",
    address: "",
    pincode: "",
    state: "",
    acceptTerms: false,
  });
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // setShowLoginForm(true);
  };

  const handleSendOTP = () => {
    // Handle sending OTP logic here
    console.log("OTP sent!");
  };

  const renderStepOne = () => (
    <div className="signup-form">
      <h2>Signup Form</h2>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneEmail">Phone/Email:</label>
        <input
          type="text"
          name="phoneEmail"
          value={formData.phoneEmail}
          onChange={handleChange}
          required
        />
      </div>
      <button onClick={() => setStep(2)}>Next</button>
    </div>
  );

  const renderStepTwo = () => (
    <div className="personal-details">
      <h2>Enter Personal Details</h2>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="pincode">Pincode:</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <button onClick={() => setStep(1)}>Back</button>
      <button onClick={() => setStep(3)}>Next</button>
    </div>
  );

  const renderStepThree = () => (
    <div className="otp-submission">
      <h2>Accept Terms and Conditions</h2>
      <div>
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
          required
        />
        <label htmlFor="acceptTerms">I accept the terms and conditions.</label>
      </div>
      <button onClick={() => setStep(2)}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );

  const renderLoginForm = () => {
    if (!showLoginForm || step !== 4) {
      return null;
    }

    return (
      <div className="form-container">
        <h2>Login</h2>
        <div>
          <label htmlFor="emailPhone">Email/Phone:</label>
          <input
            type="text"
            name="emailPhone"
            value={formData.emailPhone}
            onChange={handleChange}
            required
          />
        </div>
        {formData.loginOption === "otp" ? (
          <div>
            <button onClick={handleSendOTP}>Send OTP</button>
          </div>
        ) : (
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="loginOption">Login with:</label>
          <select
            name="loginOption"
            value={formData.loginOption}
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

  let stepContent;
  if (step === 1) {
    stepContent = renderStepOne();
  } else if (step === 2) {
    stepContent = renderStepTwo();
  } else if (step === 3) {
    stepContent = renderStepThree();
  }

  return (
    <div>
      {stepContent}
      {step === 4 && (
        <div className="terms-and-conditions">
          <h2>Terms and Conditions</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button onClick={() => setShowLoginForm(false)}>Go Back</button>
        </div>
      )}
      {showLoginForm && step === 4 && renderLoginForm()}
    </div>
  );
};

export default SignupForm; 












