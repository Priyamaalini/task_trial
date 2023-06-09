import React from 'react';
import { useNavigate } from 'react-router-dom';

const SurveyCard = ({ questionsTaken, marks, questions, title }) => {
  const navigate = useNavigate();

  const handleTakeSurvey = () => {
    const surveyData = {
      questions: questions,
      title: title,
      marks: marks
    };

    navigate('/display', { state: surveyData });
  };

  return (
    <div>
      <div className="user-dashboard-container" style={{ backgroundColor: 'black', padding: '10px', color: 'white', fontSize:'30px' }}>
        <p>User Dashboard</p>
      </div>

      <div className="card mb-3 shadow-xxl text-center">
        <div className="card-body">
          <h2 className="card-title" style={{ color: 'blue' }}>
            Previous Survey Title: {title}
          </h2>
          <p className="card-text">Questions Taken: {questionsTaken}</p>
          <p className="card-text">Marks Obtained: {marks}</p>
          <button className="btn btn-primary" onClick={handleTakeSurvey}>
            Take Survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;




