import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../utils';

const excerciseMessage = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getQuestionAndRightAnswer = () => {
  const number = getRandomNumber(1, 10);
  const excerciseText = number;

  let rightAnswer = '';
  if (isEven(number) === true) {
    rightAnswer = 'yes';
  }
  if (isEven(number) === false) {
    rightAnswer = 'no';
  }

  return cons(excerciseText, rightAnswer);
};

const runBrainEven = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainEven;
