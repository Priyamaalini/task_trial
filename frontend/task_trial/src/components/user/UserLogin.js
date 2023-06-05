// import React, { useState } from 'react';
// import { useNavigate} from 'react-router-dom';
// // import UserRegistrationForm from './UserRegister';

// const UserLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = () => {
//     // Perform login logic using username and password
//     console.log('Login clicked');
    
//     // Example admin username and password
//     const adminUsername = 'admin';
//     const adminPassword = 'admin123';
    
//     // Check if the entered username and password match the admin credentials
//     if (username === adminUsername && password === adminPassword) {
//       // Navigate to admin dashboard
//       navigate('/admin-dashboard');
//     } else {
//       // Perform regular user login
//       navigate('/survey');
//     }
//   };

//   const handleRegister = () => {
   
//     // Perform registration logic using email and password
//     console.log('Register clicked');
//     navigate('/user-register');
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Login</h2>
//       <form style={styles.form}>
//         <label style={styles.label}>Username:</label>
//         <input style={styles.input} type="text" value={username} onChange={handleUsernameChange} required />

//         <label style={styles.label}>Password:</label>
//         <input style={styles.input} type="password" value={password} onChange={handlePasswordChange} required />

//         <div style={styles.buttonContainer}>
//           <button style={styles.button} type="button" onClick={handleLogin}>Login</button>
//           <button style={styles.button} type="button" onClick={handleRegister}>Register</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//   },
//   heading: {
//     fontSize: '24px',
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: '16px',
//     marginBottom: '10px',
//     textAlign: 'left',
//     width: '100%',
//   },
//   input: {
//     padding: '10px',
//     marginBottom: '20px',
//     width: '100%',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   button: {
//     padding: '12px 20px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     marginRight: '10px',
//     cursor: 'pointer',
//   },
// };

// export default UserLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic using username and password
    console.log('Login clicked');

  // Example admin username and password
  const adminUsername = 'admin';
  const adminPassword = 'admin123';

  
    // Check if the entered username and password match the admin credentials
    if (username === adminUsername && password === adminPassword) {
      // Set the user authentication token in session storage
      sessionStorage.setItem('authToken', 'dummyAuthToken');

      // Navigate to admin dashboard
      navigate('/admin-dashboard');
    } else {
      // Retrieve username and password from session storage (assuming it was set in UserRegistration.js)
      const registeredUsername = sessionStorage.getItem('registeredUsername');
      const registeredPassword = sessionStorage.getItem('registeredPassword');

      // Check if the entered username and password match the registered credentials
      if (username === registeredUsername && password === registeredPassword) {
        // Perform regular user login
        axios
          .get('http://127.0.0.1:8000/api/users/', { username, password })
          .then((response) => {
            console.log('Login successful:', response.data);

            // Set the user authentication token in session storage
            sessionStorage.setItem('authToken', response.data.token);

            // Navigate to the desired page (e.g., survey)
            navigate('/survey');
          })
          .catch((error) => {
            console.error('Error logging in:', error);
          });
      } else {
        console.error('Invalid user');
        // Display an error message or take appropriate action for invalid user
      }
    }
  };

  const handleRegister = () => {
    navigate('/user-register');
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Login</h2>
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
