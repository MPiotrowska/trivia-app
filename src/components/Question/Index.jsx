import React from "react";
import { RadioButton } from "../RadioButton/Index.jsx";
import { useQuestionState} from '../../lib/questionContext'

export const Question = () => {

  const questionState = useQuestionState();

  return (
    <div>
      <p>{questionState.data[questionState.question].question}</p>
      <form action="">
          {
             questionState.data[questionState.question].incorrect.map(a => {
              return(<RadioButton value={a}/>)
              })
            
          }
       
      </form>
    </div>
  );
};
