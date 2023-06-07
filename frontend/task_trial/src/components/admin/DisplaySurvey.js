import React from 'react';
import  { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const DisplaySurvey = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [marks, setMarks] = useState(0); //newly added
  const { questions, title, score } = location.state || {};

  // const handleOptionChange = (questionIndex, optionIndex) => {
  //   // Handle the option selection here
  // };
  const handleOptionChange = (questionIndex, optionIndex) => {
        const selectedOption = questions[questionIndex].options[optionIndex];
        const correctOption = questions[questionIndex].correctOption;
        if (selectedOption === correctOption) {
          setMarks(prevMarks => prevMarks + 1);
        }
      };// newly added

  const handleSubmit = () => {
    navigate('/result', {marks} )    
  };  
  
  return (
    <div className="container mt-5">
      <h1 className="mb-3 text-primary text-center">{title}</h1>
      <h4 className="mb-4 d-flex justify-content-end">Total Marks: {score}</h4>

      {questions && questions.length > 0 ? (
        <div>
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-4">
              <h3>Question {questionIndex + 1}:</h3>
              <p>{question.question}</p>

              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="form-check">
                  <input
                    type="radio"
                    id={`option-${questionIndex}-${optionIndex}`}
                    className="form-check-input"
                    name={`question-${questionIndex}`}
                    value={option}
                    onChange={() => handleOptionChange(questionIndex, optionIndex)}
                  />
                  <label
                    htmlFor={`option-${questionIndex}-${optionIndex}`}
                    className="form-check-label"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Submit Survey
          </button>
        </div>
      ) : (
        <p>No questions found.</p>
      )}
    </div>
  );
};
export default DisplaySurvey;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const DisplaySurvey = () => {
//   const navigate = useNavigate();
//   const [questions, setQuestions] = useState([]);
//   const [marks, setMarks] = useState(0);

//   useEffect(() => {
//     // Fetch the survey data from the backend API
//     axios
//       .get('/api/surveys')
//       .then(response => {
//         const { data } = response;
//         setQuestions(data.questions);
//       })
//       .catch(error => {
//         console.error('Error fetching survey data:', error);
//       });
//   }, []);

//   const handleOptionChange = (questionIndex, optionIndex) => {
//     const selectedOption = questions[questionIndex].options[optionIndex];
//     const correctOption = questions[questionIndex].correctOption;
//     if (selectedOption === correctOption) {
//       setMarks(prevMarks => prevMarks + 1);
//     }
//   };

//   const handleSubmit = () => {
//     // You can perform any necessary actions here before redirecting
//     // For example, you can save the marks to a database
  
//     // Post the total marks to the server
//     axios
//       .post('/api/marks', { marks })
//       .then(response => {
//         console.log('Marks posted successfully:', response.data);
//         // Redirect to the result page with the total marks
//         navigate('/result', { marks });
//       })
//       .catch(error => {
//         console.error('Error posting marks:', error);
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Survey Questions</h2>

//       <form>
//         {questions && questions.length > 0 ? (
//           <div>
//             {questions.map((question, questionIndex) => (
//               <div key={questionIndex} className="mb-3">
//                 <h3>Question {questionIndex + 1}:</h3>
//                 <p>{question.question}</p>

//                 {question.options.map((option, optionIndex) => (
//                   <div key={optionIndex} className="form-check">
//                     <input
//                       type="radio"
//                       className="form-check-input"
//                       id={`option-${questionIndex}-${optionIndex}`}
//                       name={`question-${questionIndex}`}
//                       value={option}
//                       onChange={() => handleOptionChange(questionIndex, optionIndex)}
//                     />
//                     <label
//                       className="form-check-label"
//                       htmlFor={`option-${questionIndex}-${optionIndex}`}
//                     >
//                       {option}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No questions found.</p>
//         )}

//         <button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>
//           Submit Survey
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DisplaySurvey;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const DisplaySurvey = () => {
//   // const navigate = useNavigate();
//   const [questions, setQuestions] = useState([]);
//   const [marks, setMarks] = useState(0);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   useEffect(() => {
//     // Fetch the survey data from the backend API
//     axios
//       .get('http://127.0.0.1:8000/api/surveys/')
//       .then(response => {
//         const { data } = response;
//         setQuestions(data.questions);
//       })
//       .catch(error => {
//         console.error('Error fetching survey data:', error);
//       });
//   }, []);

//   const handleOptionChange = (questionIndex, optionIndex) => {
//     const selectedOption = questions[questionIndex].options[optionIndex];
//     const correctOption = questions[questionIndex].correctOption;
//     if (selectedOption === correctOption) {
//       setMarks(prevMarks => prevMarks + 1);
//     }
//   };

//   const handleSubmit = () => {
//     // You can perform any necessary actions here before redirecting
//     // For example, you can save the marks to a database

//     // Post the total marks to the server
//     axios
//       .post('http://127.0.0.1:8000/api/surveys/', { marks })
//       .then(response => {
//         console.log('Marks posted successfully:', response.data);
//         setIsSubmitted(true); // Set the submission flag to true
//       })
//       .catch(error => {
//         console.error('Error posting marks:', error);
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Survey Questions</h2>

//       <form>
//         {questions && questions.length > 0 ? (
//           <div>
//             {questions.map((question, questionIndex) => (
//               <div key={questionIndex} className="mb-3">
//                 <h3>Question {questionIndex + 1}:</h3>
//                 <p>{question.question}</p>

//                 {question.options.map((option, optionIndex) => (
//                   <div key={optionIndex} className="form-check">
//                     <input
//                       type="radio"
//                       className="form-check-input"
//                       id={`option-${questionIndex}-${optionIndex}`}
//                       name={`question-${questionIndex}`}
//                       value={option}
//                       onChange={() => handleOptionChange(questionIndex, optionIndex)}
//                     />
//                     <label
//                       className="form-check-label"
//                       htmlFor={`option-${questionIndex}-${optionIndex}`}
//                     >
//                       {option}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No questions found.</p>
//         )}

//         {!isSubmitted && (
//           <button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>
//             Submit Survey
//           </button>
//         )}

//         {isSubmitted && (
//           <div className="mt-3">
//             <h4>Total Marks Scored: {marks}</h4>
//             <h3>Congratulations!!!</h3>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default DisplaySurvey;
