import React from "react";
import db from "../api/data.json"
import {createRandom} from '../helpers/createRandom'

const QuestionStateContext = React.createContext();
const QuestionDispatchContext = React.createContext();



function questionReducer(state, action) {
  switch (action.type) {
    case "nextQuestion": {
        console.log('Next question running', 'Previous state', state)
      return {
          ...state,
           question: createRandom(state.data.length -1) 
        };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function QuestionProvider({ children }) {
  const [state, dispatch] = React.useReducer(questionReducer, { data:[...db], question: 0 });
  return (
    <QuestionStateContext.Provider value={state}>
      <QuestionDispatchContext.Provider value={dispatch}>
        {children}
      </QuestionDispatchContext.Provider>
    </QuestionStateContext.Provider>
  );
}

function useQuestionState() {
  const context = React.useContext(QuestionStateContext);
  if (context === undefined) {
    throw new Error("useQuestionState must be used within a QuestionProvider");
  }
  return context;
}

function useQuestionDispatch() {
  const context = React.useContext(QuestionDispatchContext);
  if (context === undefined) {
    throw new Error("useQuestionDispatch must be used within a QuestionProvider");
  }
  return context;
}

export { QuestionProvider, useQuestionState, useQuestionDispatch };
