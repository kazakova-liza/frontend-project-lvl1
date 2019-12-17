#!/usr/bin/env node

import {
  getUserName, getAnAnswer, sayHello, checkAnswer, showMessageIfWrongAnswer,
} from '.';

const brainPrime = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no". \n');
  const userName = getUserName();

  sayHello(userName);

  const isPrime = (number) => {
    if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
      return true;
    }
    return false;
  };

  const getRightAnswerForPrime = (number) => {
    if (isPrime(number) === true) {
      return 'yes';
    }
    return 'no';
  };

  let rightAnswersCount = 0;

  for (rightAnswersCount = 0; rightAnswersCount < 3; rightAnswersCount += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(number);
    const rightAnswer = getRightAnswerForPrime(number);
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

export default brainPrime;
