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

// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// // const SurveyCard = ({ title, score }) => {
// //   return (
// //     <div className="card">
// //       <div className="card-body">
// //         <h3 className="card-title">{title}</h3>
// //         <p className="card-text">Score: {score}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // const UserCountCard = ({ count }) => {
// //   return (
// //     <div className="card">
// //       <div className="card-body">
// //         <h3 className="card-title">Users Taken Survey</h3>
// //         <p className="card-text">Count: {count}</p>
// //       </div>
// //     </div>
// //   );
// // };

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { title } = location.state || {};

//   // const [title, setTitle] = useState('');
//   // const [score, setScore] = useState(0);
//   const [userCount, setUserCount] = useState(0);

//   useEffect(() => {
//     // Fetch user count using Axios
//     axios.get('http://127.0.0.1:8000/api/users/') // Replace '/api/userCount' with your actual API endpoint
//       .then(response => {
//         setUserCount(response.data.count);
//       })
//       .catch(error => {
//         console.error('Error fetching user count:', error);
//       });
      
//   }, []);

//   const handleCreateSurvey = () => {
//     console.log('Create Survey clicked');
//     navigate('/new-Survey');
//     // const newSurvey = {
//     //   title: title || "", // Provide a default empty string if title is undefined
//     //   score: score || 0 ,// Provide a default value of 0 if score is undefined
    
//     //  };

//     // console.log(newSurvey)
//     // // Post new survey using Axios
//     // axios.post('http://127.0.0.1:8000/api/surveys/', newSurvey)
//     //   .then(response => {
//     //     console.log('New survey created:', response.data);
//     //     // navigate('/new-survey');
//     //   })
//     //   .catch(error => {
//     //     if (error.response) {
//     //       // The request was made and the server responded with a status code
//     //       console.error('Error creating survey:', error.response.data);
//     //       console.error('Status code:', error.response.status);
//     //     } else if (error.request) {
//     //       // The request was made but no response was received
//     //       console.error('No response received:', error.request);
//     //     } else {
//     //       // Something else happened in making the request
//     //       console.error('Error creating survey:', error.message);
//     //     }
//     //   })

//     //   .finally(() => {
//     //     navigate('/new-survey');
//     //   });
//   };
  
//   return (
//     <div className="container mt-4 zoom-in-effect">
//       <div className="row">
//         <div className="col-md-4">
//           <div className="card bg-primary text-white">
//             <div className="card-body">
//               <h5 className="card-title">Title: {title}</h5>
//               {/* <p className="card-text">Score: {score}</p> */}
//               <h4 className="card-text">No of users taken: {userCount}</h4>
//             </div>
//           </div>
//         </div>
//         {/* <div className="col-md-4">
//           <div className="card bg-info text-white">
//             <div className="card-body">
//               <h5 className="card-title">User Count</h5>
//               <p className="card-text">{userCount}</p>
//             </div>
//           </div>
//         </div> */}
//       </div>
  
//       {/* <div className="row mt-4">
//         <div className="col">
//           <label>Title:</label>
//           <input
//             type="text"
//             className="form-control"
//             value={title}
//             onChange={e => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="col">
//           <label>Score:</label>
//           <input
//             type="number"
//             className="form-control"
//             value={score}
//             onChange={e => setScore(parseInt(e.target.value))}
//           />
//         </div>
//       </div> */}
//       <div className="row">
//         <div className="col">
//           <button className="btn btn-secondary mt-3" onClick={handleCreateSurvey}>Create New Survey</button>
//         </div>
//       </div>
//     </div>
//   );
// };




// export default AdminDashboard;


import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';




const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title } = location.state || {};
  const { adminUsername } = location.state || {};
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Fetch user count using Axios
    axios.get('http://127.0.0.1:8000/api/count/') // Replace '/api/userCount' with your actual API endpoint
      .then(response => {
        setUserCount(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching user count:', error);
      })
      .finally(() => {
        handleGreeting();
      });

      
  }, []);



  const handleGreeting = () => {
    toast.success(`Welcome , ${adminUsername}!`, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  

  const handleCreateSurvey = () => {
    console.log('Create Survey clicked');
    navigate('/new-Survey');
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    
    // Clear the user authentication token from session storage
    sessionStorage.removeItem('authToken');
  
    // Navigate to the login page
    navigate('/');
  };
  
  
  return (


    <div className="container mt-4">
       <div className="row justify-content-between align-items-center">
        <div>
          {/* <h3 className='text-success'>Welcome, {adminUsername}!</h3> */}
          <ToastContainer/>
        </div>
        <div className='d-flex justify-content-end mr-3'>
          <button className="btn btn-secondary" onClick={handleCreateSurvey}>
            <FontAwesomeIcon icon={faPlusCircle} /> Add 
          </button>
          <button className="btn btn-danger ml-3" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="container mt-4">
        <div className="col-md-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Title: {title}</h5>
              {/* <p className="card-text">Score: {score}</p> */}
              <h4 className="card-text">No of users taken: {userCount}</h4>
            </div>
          </div>
        </div>
</div>
    </div>
    
  );
};




export default AdminDashboard;