import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../index';

const excerciseMessage = 'Answer "yes" if the number is even, otherwise answer "no"\n';

const getRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getQuestionAndRightAnswer = () => {
  const number = getRandomNumber(10);
  const excerciseText = `Question: ${number}`;
  const rightAnswer = getRightAnswer();

  return cons(excerciseText, rightAnswer);
};

const runBrainEven = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainEven;
