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
};

function questionReducer(state, action) {
  switch (action.type) {
    case "initializeGame": {
      console.log(state)
      return {
        ...state,
        gameInitialized: true,
      };
    }
    case "nextQuestion": {
      return {
        ...state,
        question: state.question + 1,
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
