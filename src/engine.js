
import { car, cdr } from '@hexlet/pairs';

import {
  getUserName, getAnAnswer, sayHello, checkAnswer, showMessageIfWrongAnswer,
} from '.';


const gamesEngine = (excerciseMessage, getQuestionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(excerciseMessage);

  const userName = getUserName();

  sayHello(userName);

  let rightAnswersCount = 0;

  for (rightAnswersCount = 0; rightAnswersCount < 3; rightAnswersCount += 1) {
    const questionAndRightAnswer = getQuestionAndRightAnswer();
    const question = car(questionAndRightAnswer);
    const rightAnswer = cdr(questionAndRightAnswer);

    console.log(question);

    const answer = getAnAnswer();

    if (checkAnswer(answer, rightAnswer.toString()) === true) {
      console.log('Correct!');
    } else {
      showMessageIfWrongAnswer(answer, rightAnswer, userName);
      break;
    }
  }

  if (rightAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gamesEngine;
