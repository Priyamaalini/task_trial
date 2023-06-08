import React from 'react';
import { useNavigate } from 'react-router-dom';

const SurveyCard = ({ questionsTaken, marks, questions, title, score }) => {
  const navigate = useNavigate();

  const handleTakeSurvey = () => {
    const surveyData = {
      questions: questions,
      title: title,
      score: score
    };

    navigate('/display', { state: surveyData });
  };


  return (
    <div className="card mb-3 shadow-xxl">
      <div className="card-body">
        <h2 className="card-title">Previous Survey Title: {title}</h2>
        
        <p className="card-text">Questions Taken: {questionsTaken}</p>
        <p className="card-text">Marks Obtained: {marks}</p>
        <button className="btn btn-primary" onClick={handleTakeSurvey}>
          Take Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyCard;