#!/usr/bin/env node

import {
  getUserName, getAnAnswer, sayHello, checkAnswer, showMessageIfWrongAnswer,
} from '.';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no"\n');

  const userName = getUserName();

  sayHello(userName);

  const getRightAnswer = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  let rightAnswersCount = 0;

  for (rightAnswersCount = 0; rightAnswersCount < 3; rightAnswersCount += 1) {
    const number = Math.floor(Math.random() * 10);
    const question = `Question: ${number}`;
    console.log(question);

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
};

export default brainEven;
