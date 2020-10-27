import { Layout } from "./components/Layout/Index";
import { Question } from "./components/Question/Index";
import { Welcome } from "./components/Welcome/Index";
import { useStepState, useStepDispatch } from "./lib/stepperContext";
import { useQuestionDispatch } from "./lib/questionContext";

function App() {
  const stepState = useStepState();
  const dispatch = useStepDispatch();
  const nextDispatch = useQuestionDispatch()

  const handleClick = () => {
    dispatch({ type: "increment" });
    nextDispatch({type:'nextQuestion'})
  };

  return (
    <Layout>
      {stepState.step === 0 ? <Welcome /> : <Question />}
      <button onClick={handleClick}>
        {stepState.step === 0 ? "Start" : "Next"}
      </button>
    </Layout>
  );
}

export default App;
