import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../utils';

const excerciseMessage = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getQuestionAndRightAnswer = () => {
  const excercise = getRandomNumber(1, 10);

  const rightAnswer = (isEven(excercise) === true) ? 'yes' : 'no';

  return cons(excercise, rightAnswer);
};

const runBrainEven = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainEven;
