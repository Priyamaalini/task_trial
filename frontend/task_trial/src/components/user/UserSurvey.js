import React from 'react';
import { useNavigate } from 'react-router-dom';

const SurveyCard = ({ questionsTaken, marks }) => {
  const navigate = useNavigate();

  const handleTakeSurvey = () => {
    navigate('/display');
  };

  return (
    <div className="card mb-3 shadow-xxl">
      <div className="card-body">
        <h2 className="card-title">Previous Survey Results</h2>
        <p className="card-text">Questions Taken: {questionsTaken}</p>
        <p className="card-text">Marks Obtained: {marks}</p>
        <button className="btn btn-primary" onClick={handleTakeSurvey}>Take Survey</button>
      </div>
    </div>
  );
};

export default SurveyCard;
