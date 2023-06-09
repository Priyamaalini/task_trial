import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import axios from 'axios';




const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title } = location.state || {};
  const { adminUsername } = location.state || {};
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // // Fetch user count using Axios
    // axios.get('http://127.0.0.1:8000/api/count/') 
    //   .then(response => {
    //     setUserCount(response.data.count);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching user count:', error);
    //   })
    //   .finally(() => {
        handleGreeting();
      // });

      
  }, []);



  const handleGreeting = () => {
    toast.success(`Welcome , ${adminUsername}!`, {
      position: "top-left",
      autoClose: 2500,
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
  

    navigate('/');
  };
  
  
  return (


    <div className="container mt-4">
       <div className="admin-dashboard-container" style={{ backgroundColor: 'black', padding: '10px', color: 'white', fontSize:'30px' }}>
        <p>Admin Dashboard</p>
      </div>

       <div className="row justify-content-between align-items-center">
        <div>
      
          <ToastContainer/>
        </div><br/><br/>
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
             
              <h4 className="card-text">No of users taken: {userCount}</h4>
            </div>
          </div>
        </div>
</div>
    </div>
    
  );
};




export default AdminDashboard;