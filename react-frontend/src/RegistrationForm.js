// RegistrationForm.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from './graphql-mutations'; // Replace with your actual GraphQL mutation

const RegistrationForm = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      setLoadingState(false);
      console.log('Registration successful:', data);
      // Redirect after login?
    },
    onError: (error) => {
      setLoadingState(false);
      console.error('Registration failed:', error);
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingState(true);
    registerUser({ variables: { ...formData } });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          Register
        </button>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
