#!/usr/bin/env node

import {
  getUserName, getAnAnswer, sayHello, checkAnswer, showMessageIfWrongAnswer,
} from '..';

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression? \n');

  const userName = getUserName();

  sayHello(userName);

  const showProgression = (firstNumber, step, hiddenNumberIndex) => {
    let progression = `${firstNumber}`;
    let hiddenNumber = '';
    let newNumber = firstNumber + step;
    for (let i = 0; i < 9; i++) {
      if (i === hiddenNumberIndex) {
        progression += ' ..';
        hiddenNumber = newNumber;
      } else {
        progression += ` ${newNumber}`;
      }
      newNumber += step;
    }
    console.log(progression);
    return hiddenNumber;
  };

  let rightAnswersCount = 0;

  for (rightAnswersCount = 0; rightAnswersCount < 3; rightAnswersCount += 1) {
    const firstNumber = Math.floor(Math.random() * 100);
    const step = Math.floor(Math.random() * 100);
    const hiddenNumber = Math.floor(Math.random() * 10);

    const rightAnswer = showProgression(firstNumber, step, hiddenNumber);

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

export default brainProgression;
