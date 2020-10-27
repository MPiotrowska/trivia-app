import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StepProvider } from './lib/stepperContext';
import {QuestionProvider} from './lib/questionContext';



ReactDOM.render(
  <React.StrictMode>
    <StepProvider>
    <QuestionProvider>
      <App />
    </QuestionProvider>
    </StepProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
