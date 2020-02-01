/* eslint-disable no-plusplus */

import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../utils';

const excerciseMessage = 'What number is missing in the progression?';

const getQuestionAndRightAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 100);
  const lengthOfProgression = 10;
  const hiddenNumberIndex = getRandomNumber(1, lengthOfProgression);

  let hiddenNumber = '';
  let progression = '';
  const lastIndexOfProgression = lengthOfProgression - 1;

  for (let i = 0; i < lastIndexOfProgression; i++) {
    if (i === hiddenNumberIndex) {
      progression = `${progression} ..`;
      hiddenNumber = firstNumber + step * i;
    } else {
      progression = `${progression} ${firstNumber + step * i}`;
    }
  }
  return cons(progression, hiddenNumber.toString());
};

const runBrainProgression = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainProgression;
