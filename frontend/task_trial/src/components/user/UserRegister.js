import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserRegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted');
    // Perform registration logic using username, password, and email
    axios
      .post('http://127.0.0.1:8000/api/users/', { username, password, email })
      .then((response) => {
        console.log('Registration successful:', response.data);
          // Set the registered username and password in session storage
          sessionStorage.setItem('registeredUsername', username);
          sessionStorage.setItem('registeredPassword', password);
        
        navigate('/');
      })
      .catch((error) => {
        console.error('Error registering:', error);
      });
  };

  return (
    <div className="container">
      <h2 className="mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            className="form-control"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            className="form-control"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
