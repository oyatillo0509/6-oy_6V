import React, { useState } from "react";
import "./index.css";
const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    biography: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName ? "" : "Full Name is required.";
    tempErrors.username = formData.username ? "" : "Username is required.";
    tempErrors.password = formData.password
      ? formData.password.length >= 6
        ? ""
        : "Password must be at least 6 characters long."
      : "Password is required.";
    tempErrors.biography = formData.biography ? "" : "Biography is required.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      alert("Account created successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enter your full name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <span>{errors.fullName}</span>}
      </div>
      <div>
        <label>Enter your email address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Enter your username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Enter password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Your Biography</label>
        <textarea
          name="biography"
          value={formData.biography}
          onChange={handleChange}
        />
        {errors.biography && <span>{errors.biography}</span>}
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default SignupForm;
