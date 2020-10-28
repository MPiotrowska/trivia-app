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
  const correctAnswer = questionState.data[questionState.question].correct;
  const [answer, setAnswer] = React.useState(false);

  const [allAnswers, setAllAnswers] = React.useState([]);
  const [selected, setSelected] = React.useState("");

  const handleChange = (e) => {
    setSelected(e.target.name);
  };

  const currentQuestion = questionState.data[questionState.question];

  const handleClick = () => {
    setSelected("")
    if (questionState.question === 9) {
      dispatch({ type: "gameOver" });
      return;
    }

    dispatch({
      type: "nextQuestion",
    });
  };

  React.useEffect(() => {
    const allJoined = [...currentQuestion.incorrect, currentQuestion.correct];
    const shuffled = shuffle(allJoined);
    setAllAnswers(shuffled);
  }, [questionState.question]);

  React.useEffect(() => {
    setAnswer(correctAnswer === selected);
  }, [answer]);

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
        {selected.length > 0 ? (
          <p>Your answer is {answer === true ? "Correct" : "Not Correct"}</p>
        ) : null}
      </div>
      <button onClick={handleClick}>Next Question</button>
    </>
  );
};
