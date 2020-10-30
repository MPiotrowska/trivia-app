import React from "react";
import { useQuestionState, useQuestionDispatch } from "../../lib/questionContext";
import { Button } from "../Button";

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
      
      <Button onClick={handleClick}>Play again</Button>
    </>
  );
};
