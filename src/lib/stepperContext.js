import React from "react";

const StepStateContext = React.createContext();
const StepDispatchContext = React.createContext();



function stepReducer(state, action) {
  switch (action.type) {
    case "increment": {
      console.log('Increment running', 'Previous state', state)
      return { step: state.step + 1 };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function StepProvider({ children }) {
  const [state, dispatch] = React.useReducer(stepReducer, { step: 0 });
  return (
    <StepStateContext.Provider value={state}>
      <StepDispatchContext.Provider value={dispatch}>
        {children}
      </StepDispatchContext.Provider>
    </StepStateContext.Provider>
  );
}

function useStepState() {
  const context = React.useContext(StepStateContext);
  if (context === undefined) {
    throw new Error("useStepState must be used within a StepProvider");
  }
  return context;
}

function useStepDispatch() {
  const context = React.useContext(StepDispatchContext);
  if (context === undefined) {
    throw new Error("useStepDispatch must be used within a StepProvider");
  }
  return context;
}

export { StepProvider, useStepState, useStepDispatch };
