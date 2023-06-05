// import React from 'react';
// import { useNavigate} from 'react-router-dom';
// // import CreateSurvey from './components/admin/CreateSurvey';


// const SurveyCard = ({ title, score }) => {
//   return (
//     <div style={styles.card}>
//       <h3>{title}</h3>
//       <p>Score: {score}</p>
//     </div>
//   );
// };

// const UserCountCard = ({ count }) => {
//   return (
//     <div style={styles.card}>
//       <h3>Users Taken Survey</h3>
//       <p>Count: {count}</p>
//     </div>
//   );
// };

// const AdminDashboard = () => {
//   const navigate = useNavigate();  
//   const surveyTitle = 'Sample Survey';
//   const surveyScore = 80;
//   const userCount = 100;

//   const handleCreateSurvey = () => {
//     // Perform logic to create a new survey
//     console.log('Create Survey clicked');
//     navigate('/new-survey');
//   };

//   return (
//     <div style={styles.container}>
//       <SurveyCard title={surveyTitle} score={surveyScore} />
//       <UserCountCard count={userCount} />
//       <button style={styles.button} onClick={handleCreateSurvey}>Create New Survey</button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//     padding: '20px',
//   },
//   card: {
//     width: '300px',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     marginBottom: '20px',
//   },
//   button: {
//     padding: '12px 20px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
// };

// export default AdminDashboard;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SurveyCard = ({ title, score }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">Score: {score}</p>
      </div>
    </div>
  );
};

const UserCountCard = ({ count }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Users Taken Survey</h3>
        <p className="card-text">Count: {count}</p>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [score, setScore] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Fetch user count using Axios
    axios.get('http://127.0.0.1:8000/api/users/') // Replace '/api/userCount' with your actual API endpoint
      .then(response => {
        setUserCount(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching user count:', error);
      });
  }, []);

  const handleCreateSurvey = () => {
    console.log('Create Survey clicked');
    const newSurvey = {
      title: title || "", // Provide a default empty string if title is undefined
      score: score || 0 // Provide a default value of 0 if score is undefined
    };
  
    // Post new survey using Axios
    axios.post('http://127.0.0.1:8000/api/surveys/', newSurvey)
      .then(response => {
        console.log('New survey created:', response.data);
        navigate('/new-survey');
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Error creating survey:', error.response.data);
          console.error('Status code:', error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something else happened in making the request
          console.error('Error creating survey:', error.message);
        }
      });
  };
  
  return (
    <div className="container mt-6">
      <div className="row">
        <div className="col-md-6">
          <SurveyCard title={title} score={score} />
        </div>
        <div className="col-md-6">
          <UserCountCard count={userCount} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary mt-3" onClick={handleCreateSurvey}>Create New Survey</button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="col">
          <label>Score:</label>
          <input
            type="number"
            className="form-control"
            value={score}
            onChange={e => setScore(parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};



export default AdminDashboard;
