import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from './graphql-mutations';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      console.log('Registration successful:', data);
      navigate('/login');
    },
    onError: (error) => {
      console.error('Registration failed:', error);
    },
  });
  
  {error && (
    <p className="text-danger">
      Error: {error.message.includes('Email is already in use') ? 'Email is already in use' : error.message}
    </p>
  )}
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ variables: { ...formData } });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Register</h2>
      {loading ? (
        <div>
          <h3>Registering...</h3>
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Name:
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
          {error && <p className="text-danger">Error: {error.message}</p>}
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
