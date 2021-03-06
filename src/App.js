import React from "react";
import { Layout } from "./components/Layout/Index";
import { QuestionContainer } from "./components/Question/Index";
import { Reset } from "./components/Reset";
import { Welcome } from "./components/Welcome/Index";
import { useQuestionDispatch, useQuestionState } from "./lib/questionContext";

function App() {
  const questionState = useQuestionState();
  const dispatch = useQuestionDispatch();

  React.useEffect(() => {
    dispatch({
      type: "shuffle",
    });
  }, [dispatch]);

  if (questionState.gameOver) {
    return (
      <Layout>
        <Reset />
      </Layout>
    );
  }

  return (
    <Layout>
      {questionState.gameInitialized === true ? (
        <QuestionContainer />
      ) : (
        <Welcome />
      )}
    </Layout>
  );
}

export default App;
