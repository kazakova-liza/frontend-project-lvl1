
import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../utils';

const excerciseMessage = 'What number is missing in the progression?';

const lengthOfProgression = 10;

const getQuestionAndRightAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 100);
  const hiddenNumberIndex = getRandomNumber(0, lengthOfProgression - 1);

  const hiddenNumber = firstNumber + step * hiddenNumberIndex;
  let progression = '';
  const lastIndexOfProgression = lengthOfProgression - 1;

  for (let i = 0; i < lastIndexOfProgression; i += 1) {
    if (i === 0) {
      progression = `${firstNumber + step * i}`;
    }
    if (i === hiddenNumberIndex) {
      progression = `${progression} ..`;
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
