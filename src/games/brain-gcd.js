import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../utils';

const excerciseMessage = 'Find the greatest common divisor of given numbers.';

const geGreatestCommonDivisor = (number1, number2) => {
  if (number1 !== 0) {
    return geGreatestCommonDivisor(number2 % number1, number1);
  }
  return number2;
};

const getQuestionAndRightAnswer = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const excercise = `${number1} ${number2}`;

  const rightAnswer = geGreatestCommonDivisor(number1, number2);

  return cons(excercise, rightAnswer);
};

const runBrainGcd = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainGcd;
