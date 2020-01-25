/* eslint-disable no-plusplus */

import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../utils';

const excerciseMessage = 'What number is missing in the progression?';

const getQuestionAndRightAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 100);
  const hiddenNumberIndex = getRandomNumber(1, 10);

  let hiddenNumber = '';
  let progression = `${firstNumber}`;
  let newNumber = firstNumber + step;
  const lastIndexOfProgression = 9;

  for (let i = 0; i < lastIndexOfProgression; i++) {
    if (i === hiddenNumberIndex) {
      progression += ' ..';
      hiddenNumber = newNumber;
    } else {
      progression = `${progression} ${newNumber}`;
    }
    newNumber += step;
  }
  return cons(progression, hiddenNumber);
};

const runBrainProgression = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainProgression;
