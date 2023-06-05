// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const CreateSurvey = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState('');
//   const [currentOptions, setCurrentOptions] = useState([]);
//   const [currentOption, setCurrentOption] = useState('');
//   const [correctOption, setCorrectOption] = useState('');
//   const navigate = useNavigate();

//   const handleQuestionChange = (e) => {
//     setCurrentQuestion(e.target.value);
//   };

//   const handleOptionChange = (e) => {
//     setCurrentOption(e.target.value);
//   };

//   const handleCorrectOptionChange = (e, questionIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].correctOption = e.target.value;
//     setQuestions(updatedQuestions);
//   };

//   // const handleCorrectOptionChange = (e) => {
//   //   setCorrectOption(e.target.value);
//   // };

//   const handleAddQuestion = () => {
//     if (currentQuestion.trim() !== '') {
//       setQuestions([...questions, { question: currentQuestion, options: currentOptions, correctOption }]);
//       setCurrentQuestion('');
//       setCurrentOptions([]);
//       setCorrectOption('');
//     }
//   };

//   const handleAddOption = () => {
//     if (currentOption.trim() !== '') {
//       setCurrentOptions([...currentOptions, currentOption]);
//       setCurrentOption('');
//     }
//   };

//   const handleDeleteQuestion = (index) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions.splice(index, 1);
//     setQuestions(updatedQuestions);
//   };

//   const handleDeleteOption = (questionIndex, optionIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].options.splice(optionIndex, 1);
//     setQuestions(updatedQuestions);
//   };

//   const handleSubmit = () => {
//     if (questions.length > 0) {
//       navigate('/display', { state: { questions } });
//     }
//   };

//   return (
//     <div>
//       <h2>Create Survey</h2>

//       <div>
//         <label>Question:</label>
//         <input type="text" value={currentQuestion} onChange={handleQuestionChange} />
//         <button type="button" onClick={handleAddQuestion}>Add Question</button>
//       </div>

//       <div>
//         <label>Options:</label>
//         <input type="text" value={currentOption} onChange={handleOptionChange} />
//         <button type="button" onClick={handleAddOption}>Add Option</button>
//       </div>

//       <div>
//         {questions.map((question, index) => (
//           <div key={index}>
//             <h3>Question {index + 1}:</h3>
//             <p>{question.question}</p>
//             <button type="button" onClick={() => handleDeleteQuestion(index)}>Delete Question</button>
//             {question.options.map((option, optionIndex) => (
//               <div key={optionIndex}>
//                 <input type="radio" name={`question-${index}`} value={option} />
//                 <label>{option}</label>
//                 <button type="button" onClick={() => handleDeleteOption(index, optionIndex)}>Delete Option</button>
//               </div>
//             ))}
//             {/* <label>
//               Correct Option:
//               <select value={question.correctOption} onChange={handleCorrectOptionChange}>
//                 {question.options.map((option, optionIndex) => (
//                   <option key={optionIndex} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </label> */}
//                 <div>
//               <label>Select Correct Option:</label>
//               <select value={question.correctOption} onChange={(e) => handleCorrectOptionChange(e, index)}>
//                 <option value="">Choose Option</option>
//                 {question.options.map((option, optionIndex) => (
//                   <option key={optionIndex} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button type="button" onClick={handleSubmit}>Create Survey</button>
//     </div>
//   );
// };

// export default CreateSurvey;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateSurvey = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState('');
  const [correctOption, setCorrectOption] = useState('');
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

  // const handleCorrectOptionChange = (e) => {
  //   setCorrectOption(e.target.value);
  // };

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
        questions: questions.map(({ question, options, correctOption }) => ({
          question,
          options,
          correctOption,
        })),
      };

      axios
        .post('http://127.0.0.1:8000/api/surveys/', surveyData)
        .then(response => {
          console.log('Survey created:', response.data);
          navigate('/display', { state: { questions } });
        })
        .catch(error => {
          console.error('Error creating survey:', error);
        });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Survey</h2>

      <div className="mb-3">
        <label className="form-label">Question:</label>
        <input type="text" className="form-control" value={currentQuestion} onChange={handleQuestionChange} />
        <button type="button" className="btn btn-primary mt-3" onClick={handleAddQuestion}>
          Add Question
        </button>
      </div>

      <div className="mb-3">
        <label className="form-label">Options:</label>
        <input type="text" className="form-control" value={currentOption} onChange={handleOptionChange} />
        <button type="button" className="btn btn-primary mt-3" onClick={handleAddOption}>
          Add Option
        </button>
      </div>

      <div>
        {questions.map((question, index) => (
          <div key={index} className="mb-3">
            <h3>Question {index + 1}:</h3>
            <p>{question.question}</p>
            <button
              type="button"
              className="btn btn-danger mt-3"
              onClick={() => handleDeleteQuestion(index)}
            >
              Delete Question
            </button>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="form-check mt-2">
                <input
                  type="radio"
                  className="form-check-input"
                  name={`question-${index}`}
                  value={option}
                />
                <label className="form-check-label">{option}</label>
                <button
                  type="button"
                  className="btn btn-sm btn-danger ms-5 rounded-pill"
                  onClick={() => handleDeleteOption(index, optionIndex)}
                >
                  Delete Option
                </button>
              </div>
            ))}
            <div className="mt-2">
              <label className="form-label">Select Correct Option:</label>
              <select
                className="form-select"
                value={question.correctOption}
                onChange={(e) => handleCorrectOptionChange(e, index)}
              >
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

      <button type="button" className="btn btn-success mt-3" onClick={handleSubmit}>
        Create Survey
      </button>
    </div>
  );
};

export default CreateSurvey;
