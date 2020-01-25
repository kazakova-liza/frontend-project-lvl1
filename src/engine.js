
import { car, cdr } from '@hexlet/pairs';

import readlineSync from 'readline-sync';

const answersForSuccess = 3;

const gamesEngine = (excerciseMessage, getQuestionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${excerciseMessage} \n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  let rightAnswersCount = 0;

  for (rightAnswersCount = 0; rightAnswersCount < answersForSuccess; rightAnswersCount += 1) {
    const questionAndRightAnswer = getQuestionAndRightAnswer();
    const question = car(questionAndRightAnswer);
    const rightAnswer = cdr(questionAndRightAnswer);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gamesEngine;
