import React from "react";
import { Answer } from "../Answer";
import { Question } from "./Question";
import {
  useQuestionState,
  useQuestionDispatch
  
} from "../../lib/questionContext";
import {Button} from '../Button'

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
      <div style={{minHeight: '80px'}}>
        {questionState.showAnswer === true ? <Answer />: null}
      </div>
      <Button disabled={questionState.disableNext} onClick={handleClick}>Next Question</Button>
    </>
  );
};
