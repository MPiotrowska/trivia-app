import React from "react";
import {
  useQuestionState,
  useQuestionDispatch,
} from "../../lib/questionContext";
import { Button } from "../Button";
import Leo from "../../images/Leo.gif";
import Bill from "../../images/Bill.gif";
import "./Reset.css";

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
      <div className="gameOverContainer">
        <h1 className="welcomeText" style={{ fontWeight: "bold" }}>
          Your score is: {state.correctAnswersCounter} <span>/ 10</span>{" "}
        </h1>
        {state.correctAnswersCounter > 5 ? (
          <img className="gameOverImage" src={Leo} alt="" />
        ) : (
          <img className="gameOverImage" src={Bill} alt="" />
        )}
      </div>

      <Button onClick={handleClick}>Play again</Button>
    </>
  );
};
