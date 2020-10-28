import React from 'react'
import { Layout } from "./components/Layout/Index";
import { Question } from "./components/Question/Index";
import { Reset } from './components/Reset';
import { Welcome } from "./components/Welcome/Index";
import { useQuestionDispatch, useQuestionState } from "./lib/questionContext";



function App() {
  const questionState = useQuestionState();
  const dispatch = useQuestionDispatch();

  React.useEffect(() => {
   dispatch({
     type: 'shuffle'
   })
  }, []);

  if(questionState.gameOver) {
    return (
      <Layout>
        
        <Reset/>
      </Layout>
    )
  }

  return (
    <Layout>
      {questionState.gameInitialized === true ? <Question /> : <Welcome /> }
    </Layout>
  );
}

export default App;
