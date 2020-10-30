import React from "react";
import { RadioButton } from "../RadioButton/Index.jsx";
import {
  useQuestionState,
  useQuestionDispatch,
} from "../../lib/questionContext";
import { shuffle } from "../../helpers/shuffle";
import './Question.css'

export function Question() {
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
        <h1 className='welcomeText'>{currentQuestion.question}</h1>
        <div className='radioButtonGroup'>
          {allAnswers.map((a) => {
            return (
              <RadioButton
                value={a}
                checked={selected === a}
                onChange={handleChange}
                onClick={handleChange}
              />
            );
          })}
       </div>
      </div>
    </>
  );
};
