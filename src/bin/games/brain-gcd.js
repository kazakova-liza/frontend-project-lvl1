#!/usr/bin/env node

import {
  getUserName, getAnAnswer, sayHello, checkAnswer, showMessageIfWrongAnswer, showTwoRandomNumbers, getRightAnswerGcd,
} from '..';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers. \n');

const userName = getUserName();

sayHello(userName);

let rightAnswersCount = 0;

for (rightAnswersCount = 0; rightAnswersCount < 3; rightAnswersCount += 1) {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);

  showTwoRandomNumbers(number1, number2);

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