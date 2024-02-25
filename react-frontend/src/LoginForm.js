import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './graphql-mutations';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isLoggedIn, setLoggedIn] = useState(false);

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      console.log('Login successful:', data);
      setLoggedIn(true);
      navigate("/profile");
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ variables: { ...formData } });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div>
        <h2 className="mb-4">Login</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
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
            {error && <p className="text-danger">Error: {error.message}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
