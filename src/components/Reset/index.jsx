import React from "react";
import { useQuestionState, useQuestionDispatch } from "../../lib/questionContext";

export const Reset = () => {
  const dispatch = useQuestionDispatch();
  const state = useQuestionState();

  const handleClick = () => {
    dispatch({
      type: "reset",
    });
    dispatch({
      type: "shuffle",
    });
  };

  return (
    <>
      <div>
        <p>Your score is: {state.correctAnswersCounter} <span>/ 10</span> </p>
      </div>
      <button onClick={handleClick}>Play again</button>
    </>
  );
};
