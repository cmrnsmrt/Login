// LoginForm.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './graphql-mutations';

const LoginForm = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      setLoadingState(false);
      console.log('Login successful:', data);
      // Redirect to user page?
    },
    onError: (error) => {
      setLoadingState(false);
      console.error('Login failed:', error);
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingState(true);
    loginUser({ variables: { ...formData } });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login Form</h2>
      <form onSubmit={handleSubmit}>
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
          Login
        </button>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
