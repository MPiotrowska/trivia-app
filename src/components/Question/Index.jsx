import React from "react";
import { Answer } from "../Answer";
import { Question } from "./Question";
import {
  useQuestionState,
  useQuestionDispatch
  
} from "../../lib/questionContext";

export const QuestionContainer = () => {
  const questionState = useQuestionState();
  const dispatch = useQuestionDispatch()


  const handleClick = () => {
    if (questionState.question === 9) {
      dispatch({ type: "gameOver" });
      return;
    }

    dispatch({
      type: "nextQuestion",
    });
  };

  return (
    <>
      <Question />
      {questionState.showAnswer === true ? <Answer />: null}
      <button disabled={questionState.disableNext} onClick={handleClick}>Next Question</button>
    </>
  );
};
