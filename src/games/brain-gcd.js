import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../utils';

const excerciseMessage = 'Find the greatest common divisor of given numbers.';

const getQuestionAndRightAnswer = () => {
  const getRightAnswer = (number1, number2) => {
    if (number1 !== 0) {
      return getRightAnswer(number2 % number1, number1);
    }
    return number2;
  };
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const excerciseText = `${number1} ${number2}`;

  const rightAnswer = getRightAnswer(number1, number2);

  return cons(excerciseText, rightAnswer);
};

const runBrainGcd = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainGcd;
