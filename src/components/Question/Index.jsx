import React from "react";
import { RadioButton } from "../RadioButton/Index.jsx";
import { useQuestionState, useQuestionDispatch} from "../../lib/questionContext";


export const Question = () => {
  const questionState = useQuestionState();
  const dispatch = useQuestionDispatch();
  const handleClick = () => {
    if ( questionState.question === 10) {
      dispatch({ type: 'gameOver'})
      return;
    }

    dispatch({
      type:'nextQuestion'
    })

  }

  React.useEffect(() => {
    console.log("Question is number: ", questionState.question);
  }, [questionState.question]);

  return (
    <div>
      <p>{questionState.data[questionState.question].question}</p>
      <form action="">
        {questionState.data[questionState.question].incorrect.map((a) => {
          return <RadioButton value={a} />;
        })}
      </form>
      <button onClick={handleClick}>Next Question</button>
    </div>
  );
};
