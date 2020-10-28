import React from "react";
import { useQuestionDispatch } from "../../lib/questionContext";

export const Reset = () => {
  const dispatch = useQuestionDispatch();

  const handleClick = () => {
    dispatch({
      type: "reset",
    });
  };

  return (
    <>
      <div>
        <p>Your score is: 0 </p>
      </div>
      <button onClick={handleClick}>Play again</button>
    </>
  );
};
