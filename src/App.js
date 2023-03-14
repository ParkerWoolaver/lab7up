import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Route } from "react-router-dom";
import Dashboard from "./dashboard";

function App() {

  // variables for form fields and error messages
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favoriteSeason, setFavoriteSeason] = useState("");
  const [errors, setErrors] = useState({});

  // regex for validation
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors
    const errors = {};
    if (!nameRegex.test(firstName)) {
      errors.firstName = "Please enter a valid first name";
    }
    if (!nameRegex.test(lastName)) {
      errors.lastName = "Please enter a valid last name";
    }
    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!passwordRegex.test(password)) {
      errors.password =
        "Password must contain at least 1 alphabet, 1 number, 1 special character and 1 uppercase letter";
      }
  
     // Set error state
    setErrors(errors);

    // If there are no errors, render the profile
    if (Object.keys(errors).length === 0) {
      renderProfile();
    }
  };

  // Render the profile div
  const renderProfile = () => {
    const profileDiv = (
      <div>
        <h2>Profile:</h2>
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Favorite Season:</strong> {favoriteSeason}
        </p>
      </div>
    );
    
    ReactDOM.render(profileDiv, document.getElementById("root"));
  };

  


  // Form input and setting the values
  return (
    <div className="container">
      <h1>User Profile:</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            pattern="[A-Za-z]+"
            required
          />
          {errors.firstName && (
            <div className="text-danger">{errors.firstName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            pattern="[A-Za-z]+"
            required
          />
          {errors.lastName && (
            <div className="text-danger">{errors.lastName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <div className="text-danger">{errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password"
            className="form-control"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {errors.password && (
        <div className="text-danger">{errors.password}</div>
      )}
    </div>

    <div className="form-group">
      <label htmlFor="favoriteSeason">Favorite Season:</label>
      <select
        className="form-control"
        id="favoriteSeason"
        value={favoriteSeason}
        onChange={(e) => setFavoriteSeason(e.target.value)}
        required
      >
        <option value="">--Please choose an option--</option>
        <option value="Spring">Spring</option>
        <option value="Fall">Fall</option>
        <option value="Winter">Winter</option>
      </select>
    </div>

    <button type="submit" className="button">Submit</button>
  </form>
</div>

  );
  }

export default App;
