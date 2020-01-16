
import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../index';

const excerciseMessage = 'What number is missing in the progression? \n';

const getQuestionAndRightAnswer = () => {
  const firstNumber = getRandomNumber(100);
  const step = getRandomNumber(100);
  const hiddenNumberIndex = getRandomNumber(10);

  let hiddenNumber = '';
  let progression = `${firstNumber}`;
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
  return cons(progression, hiddenNumber);
};

const runBrainProgression = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainProgression;
