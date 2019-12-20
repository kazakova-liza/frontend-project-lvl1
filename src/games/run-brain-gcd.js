#!/usr/bin/env node

import {
  getUserName, getAnAnswer, sayHello, checkAnswer, showMessageIfWrongAnswer,
} from '..';

const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers. \n');

  const userName = getUserName();

  sayHello(userName);

  const getRightAnswerGcd = (number1, number2) => {
    if (number1 === number2) {
      return number1;
    }
    if (number1 > number2 && number1 % number2 === 0) {
      return number2;
    }
    if (number2 > number1 && number2 % number1 === 0) {
      return number1;
    }
    if (number1 > number2 && number1 % number2 !== 0) {
      for (let dividor = number2 - 1; dividor > 0; dividor--) {
        if (number2 % dividor === 0 && number1 % dividor === 0) {
          return dividor;
        }
      }
    }
    if (number2 > number1 && number2 % number1 !== 0) {
      for (let dividor = number1 - 1; dividor > 0; dividor--) {
        if (number1 % dividor === 0 && number2 % dividor === 0) {
          return dividor;
        }
      }
    }
  };

  let rightAnswersCount = 0;

  for (rightAnswersCount = 0; rightAnswersCount < 3; rightAnswersCount += 1) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);

    console.log(`${number1} ${number2}`);

    const answer = getAnAnswer();
    const rightAnswer = getRightAnswerGcd(number1, number2);

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

export default brainGcd;
