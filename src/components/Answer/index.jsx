import React from "react";
import {useQuestionState} from '../../lib/questionContext'

export const Answer = () => {
  const questionState = useQuestionState();
  return (
    <>
      <div>Correct answer is {questionState.currentCorrectAnswer}</div>
    </>
  );
};
