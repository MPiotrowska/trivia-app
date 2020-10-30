import React from "react";
import { useQuestionState } from "../../lib/questionContext";

export const Answer = () => {
  const questionState = useQuestionState();
  return <p style={{ fontSize: '18px'}}>Correct answer is {questionState.currentCorrectAnswer}</p>;
};
