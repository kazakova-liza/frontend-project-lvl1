#!/usr/bin/env node

import {
  getUserName, showQuestion, getAnAnswer, getRightAnswer, sayHello, checkAnswer, showMessageIfWrongAnswer,
} from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no"\n');

const userName = getUserName();

sayHello(userName);

let rightAnswersCount = 0;

for (rightAnswersCount = 0; rightAnswersCount < 3; rightAnswersCount += 1) {
  const number = Math.floor(Math.random() * 10);
  showQuestion(number);

  const answer = getAnAnswer();
  const rightAnswer = getRightAnswer(number);

  if (checkAnswer(answer, rightAnswer) === true) {
    console.log('Correct!');
  } else {
    showMessageIfWrongAnswer(answer, rightAnswer, userName);
    break;
  }
}

if (rightAnswersCount === 3) {
  console.log(`Congratulations, ${userName}!`);
}
