import React from "react";
import { useQuestionDispatch } from "../../lib/questionContext";
import image from "../../images/bg-image.png";
import "./Welcome.css";
import { Button } from "../Button";

export const Welcome = () => {
  const dispatch = useQuestionDispatch();

  const handleClick = () => {
    dispatch({
      type: "initializeGame",
    });
  };
  return (
    <>
      <div>
        <img src={image} alt="" />
        <h1 className="welcomeText">
          If you get a high score, you probably spend way too much time on
          reading books.
        </h1>
        <p className="description">
          There are 10 questions in each round. Have fun 🎉🎉🎉
        </p>
      </div>
      
      <Button onClick={handleClick}>Start Quiz</Button>
    </>
  );
};
