import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateSurvey = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState('');
  const [correctOption, setCorrectOption] = useState('');
  const [title, setTitle] = useState('');
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const handleQuestionChange = (e) => {
    setCurrentQuestion(e.target.value);
  };

  const handleOptionChange = (e) => {
    setCurrentOption(e.target.value);
  };

  const handleCorrectOptionChange = (e, questionIndex) => {
    const updatedQuestions = [...questions];

    updatedQuestions[questionIndex].correctOption = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    if (currentQuestion.trim() !== '') {
      setQuestions([...questions, { question: currentQuestion, options: currentOptions, correctOption }]);
      setCurrentQuestion('');
      setCurrentOptions([]);
      setCorrectOption('');
    }
  };

  const handleAddOption = () => {
    if (currentOption.trim() !== '') {
      setCurrentOptions([...currentOptions, currentOption]);
      setCurrentOption('');
    }
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleDeleteOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    if (questions.length > 0) {
      const surveyData = {
        title,
        score
      };

      axios.post('http://127.0.0.1:8000/api/surveys/', surveyData)
        .then(response => {
          const surveyId = response.data.id;
          const questionPromises = questions.map(({ question, options, correctOption }) => {
            const questionData = {
              question,
              survey: surveyId
            };

            return axios.post('http://127.0.0.1:8000/api/questions/', questionData)
              .then(response => {
                const questionId = response.data.id;
                const optionPromises = options.map(option => {
                  const optionData = {
                    option,
                    is_correct: option === correctOption,
                    question: questionId
                  };

                  return axios.post('http://127.0.0.1:8000/api/options/', optionData);
                });

                return Promise.all(optionPromises);
              });
          });

          Promise.all(questionPromises)
            .then(() => {
              console.log('Survey created');
              navigate('/display', { state: { questions, title, score } });
            })
            .catch(error => {
              console.error('Error creating options:', error);
            });
        })
        .catch(error => {
          console.error('Error creating survey:', error);
        });
    }
  };

  return (
    <div className="container">
      
      <h2 className='text-center text-primary'>CREATE SURVEY</h2>

      <div className="form-group">
        <label>Title:</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Score:</label>
        <input type="number" className="form-control" value={score} onChange={(e) => setScore(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Question:</label>
        <input type="text" className="form-control" value={currentQuestion} onChange={handleQuestionChange} /><br/>
        <button type="button" className="btn btn-primary" onClick={handleAddQuestion}>Add Question</button>
      </div>

      <div className="form-group">
        <label>Options:</label>
        <input type="text" className="form-control" value={currentOption} onChange={handleOptionChange} /><br/>
        <button type="button" className="btn btn-primary" onClick={handleAddOption}>Add Option</button>
      </div>

      <div>
        {questions.map((question, index) => (
          <div key={index} className="card my-3">
            <div className="card-body">
              <h3 className="card-title">Question {index + 1}:</h3>
              <p className="card-text">{question.question}</p>
              <button type="button" className="btn btn-danger rounded-pill" onClick={() => handleDeleteQuestion(index)}>Delete Question</button>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="form-check">
                  <input type="radio" className="form-check-input" name={`question-${index}`} value={option} />
                  <label className="form-check-label mt-2">{option}</label>
                  <button type="button" className=" btn btn-danger rounded-pill" onClick={() => handleDeleteOption(index, optionIndex)}>Delete Option</button>
                </div>
              ))}
              <div className="form-group">
                <label>Select Correct Option:</label>
                <select className="form-control" value={question.correctOption} onChange={(e) => handleCorrectOptionChange(e, index)}>
                  <option value="">Choose Option</option>
                  {question.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div><br/><br/>

      <button type="button" className="btn btn-success" onClick={handleSubmit}>Create Survey</button>
    </div>
  );
};

export default CreateSurvey;
