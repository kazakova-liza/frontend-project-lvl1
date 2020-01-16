
import { car, cdr } from '@hexlet/pairs';

import readlineSync from 'readline-sync';


const gamesEngine = (excerciseMessage, getQuestionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(excerciseMessage);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  const answersForSuccess = 3;

  let rightAnswersCount = 0;

  for (rightAnswersCount = 0; rightAnswersCount < answersForSuccess; rightAnswersCount += 1) {
    const questionAndRightAnswer = getQuestionAndRightAnswer();
    const question = car(questionAndRightAnswer);
    const rightAnswer = cdr(questionAndRightAnswer);

    console.log(question);

    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }

  if (rightAnswersCount === answersForSuccess) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gamesEngine;
