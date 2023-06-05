import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './components/user/UserLogin';
import UserRegistrationForm from './components/user/UserRegister';
import SurveyCard from './components/user/UserSurvey';
import AdminDashboard from './components/admin/AdminDashboard';
import CreateSurvey from './components/admin/AdminSurvey';
import DisplaySurvey from './components/admin/DisplaySurvey';



const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<UserLogin />} />
      <Route path="/user-register" element={<UserRegistrationForm />} />
      <Route path="/survey" element={<SurveyCard />} />
      <Route path="/new-survey" element={<CreateSurvey />} />
      <Route path="/display" element={<DisplaySurvey />} />
      <Route path="/admin-dashboard" element={<AdminDashboard/>} />
    </Routes>
  </Router>
  );
};

export default App;
