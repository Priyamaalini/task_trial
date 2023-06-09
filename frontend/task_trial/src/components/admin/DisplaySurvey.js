import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


const Card = () => {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  // const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the APIs
    axios.get('http://127.0.0.1:8000/api/surveys/')
      .then(response => {
        setSurveys(response.data);
      })
      .catch(error => {
        console.error('Error fetching surveys:', error);
      });

    axios.get('http://127.0.0.1:8000/api/questions/')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });

    axios.get('http://127.0.0.1:8000/api/options/')
      .then(response => {
        setOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });
  }, []);
  const handleSurveyClick = surveyId => {
    const selected = surveys.find(survey => survey.id === surveyId);
    setSelectedSurvey(selected);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setCorrectAnswersCount(0);
  };

  const handleOptionChange = (questionId, optionId, isCorrect) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: optionId,
    }));

    if (isCorrect) {
      setCorrectAnswersCount(prevCount => prevCount + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
    
  };

  const handleSubmit = () => {
   
    // navigate('/survey')
  };

  const renderOptions = (question) => {
    return options
      .filter(option => option.question === question.id)
      .map(option => (
        <div key={option.id} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id={option.id}
            name={`question_${question.id}`}
            value={option.id}
            onChange={() => handleOptionChange(question.id, option.id, option.is_correct)}
            checked={answers[question.id] === option.id}
          />
          <label className="form-check-label" htmlFor={option.id}>
            {option.option}
          </label>
        </div>
      ));
  };

  return (
    <div className="container">
      <h1 className='text-center text-primary'>SURVEYS LIST</h1>
      {surveys.map(survey => (
        <div className="card" key={survey.id}>
          <div className="card-body">
            <h2 className="card-title  text-primary" onClick={() => handleSurveyClick(survey.id)}>
              {survey.title}
            </h2>
            <p className="card-text">Score: {survey.score}</p>
            <p className="card-text">Created At: {survey.created_at}</p>

            {selectedSurvey && selectedSurvey.id === survey.id && !quizCompleted && (
              <div>
                <h3>Question {currentQuestionIndex + 1}</h3>
                {questions
                  .filter(question => question.survey === survey.id)
                  .map((question, index) => (
                    index === currentQuestionIndex && (
                      <div key={question.id}>
                        <p>{question.question}</p>

                        <h4>Options</h4>
                        {renderOptions(question)}
                      </div>
                    )
                  ))}
                 <div className="d-flex justify-content-end">
                   <button className="btn btn-primary" onClick={handleNextQuestion}>Next Question</button>
                 </div>
              </div>
            )}
            {selectedSurvey && selectedSurvey.id === survey.id && quizCompleted && (
              <div>
                <h3 className='text-success'>Quiz Completed!</h3>
                <p>Total Correct Answers: {correctAnswersCount}</p>
                <p>Total Mark: {(selectedSurvey.score / (questions.filter(question => question.survey === selectedSurvey.id).length)) * correctAnswersCount}</p>
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

