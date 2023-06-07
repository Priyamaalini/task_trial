import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'animate.css/animate.min.css';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('Login clicked');

    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    if (username === adminUsername && password === adminPassword) {
      sessionStorage.setItem('authToken', 'dummyAuthToken');
      navigate('/admin-dashboard', { state: { adminUsername } });
    } else {
      const registeredUsername = sessionStorage.getItem('registeredUsername');
      const registeredPassword = sessionStorage.getItem('registeredPassword');

      if (username === registeredUsername && password === registeredPassword) {
        axios
          .get('http://127.0.0.1:8000/api/userprofiles/', { username, password })
          .then((response) => {
            console.log('Login successful:', response.data);
            sessionStorage.setItem('authToken', response.data.token);
            navigate('/survey');
          })
          .catch((error) => {
            console.error('Error logging in:', error);
            setErrorMessage('Invalid credentials. Please try again.');
          });
      } else {
        console.error('Invalid user');
        setErrorMessage('Invalid credentials. Please try again.');
      }
    }
  };

  const handleRegister = () => {
    navigate('/user-register');
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Login</h2>
      {errorMessage && (
        <div className="alert alert-danger mt-3 animate__animated animate__fadeIn" role="alert">
          {errorMessage}
        </div>
      )}
      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
