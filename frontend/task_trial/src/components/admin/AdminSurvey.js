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
    <div>
      <h2>Create Survey</h2>

      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Score:</label>
        <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />
      </div>

      <div>
        <label>Question:</label>
        <input type="text" value={currentQuestion} onChange={handleQuestionChange} />
        <button type="button" onClick={handleAddQuestion}>Add Question</button>
      </div>

      <div>
        <label>Options:</label>
        <input type="text" value={currentOption} onChange={handleOptionChange} />
        <button type="button" onClick={handleAddOption}>Add Option</button>
      </div>

      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <h3>Question {index + 1}:</h3>
            <p>{question.question}</p>
            <button type="button" onClick={() => handleDeleteQuestion(index)}>Delete Question</button>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input type="radio" name={`question-${index}`} value={option} />
                <label>{option}</label>
                <button type="button" onClick={() => handleDeleteOption(index, optionIndex)}>Delete Option</button>
              </div>
            ))}
            <div>
              <label>Select Correct Option:</label>
              <select value={question.correctOption} onChange={(e) => handleCorrectOptionChange(e, index)}>
                <option value="">Choose Option</option>
                {question.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      <button type="button" onClick={handleSubmit}>Create Survey</button>
    </div>
  );
};

export default CreateSurvey;
