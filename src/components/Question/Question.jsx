import React from "react";
import { RadioButton } from "../RadioButton/Index.jsx";
import {
  useQuestionState,
  useQuestionDispatch,
} from "../../lib/questionContext";
import { shuffle } from "../../helpers/shuffle";

export const Question = () => {
  const questionState = useQuestionState();
  const dispatch = useQuestionDispatch();

  const currentQuestion = questionState.data[questionState.question];
  const correctAnswer = currentQuestion.correct;

  const [allAnswers, setAllAnswers] = React.useState([]);
  const [selected, setSelected] = React.useState("");

  const handleChange = (e) => {
    setSelected(e.target.name);
    dispatch({
      type: "toggleShowAnswer",
      payload: correctAnswer,
    });
    dispatch({
      type: "enableNext",
    });
  };

  React.useEffect(() => {
    const allJoined = [...currentQuestion.incorrect, currentQuestion.correct];
    const shuffled = shuffle(allJoined);
    setAllAnswers(shuffled);
  }, [
    questionState.question,
    currentQuestion.correct,
    currentQuestion.incorrect,
  ]);

  React.useEffect(() => {
    if (correctAnswer === selected) {
      dispatch({
        type: "setCorrectAnswer",
      });
    }
  }, [correctAnswer, selected, dispatch]);

  return (
    <>
      <div>
        <p>{currentQuestion.question}</p>
        <form action="">
          {allAnswers.map((a) => {
            return (
              <RadioButton
                value={a}
                checked={selected === a}
                onChange={handleChange}
              />
            );
          })}
        </form>
      </div>
    </>
  );
};
