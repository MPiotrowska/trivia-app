## System Requirements

To run the app you’ll need to have [Node >= 8.10 and npm >= 5.6](https://nodejs.org/en/) on your machine.


### Available Scripts

To start the local server, in the project's root directory, you can run the command below:

`npm start or yarn start`

### Decisions

- This project uses `css` files for styles
- For state management, I decided to experiment with the Context API using only one reducer.

### Dispatch and State

The setup of the context file was based on [this setup](https://kentcdodds.com/blog/how-to-use-react-context-effectively) and uses separate contexts for global state and dispatch.

```js
const GlobalStateContext = React.createContext(undefined);
const GlobalDispatchContext = React.createContext(undefined);
```

### Improvements / Todos

At the moment when a user selects an answer they are able to change the answer by clicking another option.
An improvement would be to disable the options after a user has selected their answer.
An overall improvement would also be to write some tests.

### Assumptions

- A round of trivia has 10 Questions
-  All questions are multiple-choice questions
-  Your score does not need to update in real time
-  Results can update on form submit, button click, or any interaction you choose
-  We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

### Acceptance Criteria

- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time.
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round




  
