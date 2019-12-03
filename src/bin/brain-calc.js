#!/usr/bin/env node

import {
  getUserName, getAnAnswer, sayHello, checkAnswer, showMessageIfWrongAnswer, getRandomIntFromMinToMax, chooseOperator, showExpression, getRightAnswerCalculator,
} from '..';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression? \n');

const userName = getUserName();

sayHello(userName);

let rightAnswersCount = 0;

for (rightAnswersCount = 0; rightAnswersCount < 3; rightAnswersCount += 1) {
  const operatorNumber = getRandomIntFromMinToMax(1, 3);
  const operator = chooseOperator(operatorNumber);
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);

  showExpression(number1, number2, operator);

  const answer = getAnAnswer();
  const rightAnswer = getRightAnswerCalculator(number1, number2, operatorNumber);

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
