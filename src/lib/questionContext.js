import React from "react";
import db from "../api/data.json";
import { shuffle } from "../helpers/shuffle";

const QuestionStateContext = React.createContext();
const QuestionDispatchContext = React.createContext();

const initialState = {
  data: [...db],
  question: 0,
  gameInitialized: false,
  gameOver: false,
  showAnswer: false,
  currentCorrectAnswer: "",
  correctAnswersCounter: 0,
  disableNext: true,
};

function questionReducer(state, action) {
  switch (action.type) {
    case "initializeGame": {
      console.log('Game Init State: ', state);
      return {
        ...state,
        gameInitialized: true,
      };
    }
    case "nextQuestion": {
      return {
        ...state,
        question: state.question + 1,
        showAnswer: false,
        disableNext: true, 
      };
    }
    case "gameOver": {
      return {
        ...state,
        gameOver: true,
      };
    }
    case "shuffle": {
      return {
        ...state,
        data: shuffle(state.data),
      };
    }

    case "toggleShowAnswer": {
      return {
        ...state,
        showAnswer: true,
        currentCorrectAnswer: action.payload,
      };
    }

    case "setCorrectAnswer": {
      console.log("that was correct", state);
      return {
        ...state,
        correctAnswersCounter: state.correctAnswersCounter + 1,
      };
    }

    case "enableNext": {
      return {
        ...state,
        disableNext: false,
      };
    }

    case "reset": {
      console.log('Current state is: ', state)
      return initialState;
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function QuestionProvider({ children }) {
  const [state, dispatch] = React.useReducer(questionReducer, initialState);
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
    throw new Error(
      "useQuestionDispatch must be used within a QuestionProvider"
    );
  }
  return context;
}

export { QuestionProvider, useQuestionState, useQuestionDispatch };
