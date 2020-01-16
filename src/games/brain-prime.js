import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../index';

const excerciseMessage = 'Answer "yes" if given number is prime. Otherwise answer "no". \n';

const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRightAnswer = (number) => {
  if (isPrime(number) === true) {
    return 'yes';
  }
  return 'no';
};

const getQuestionAndRightAnswer = () => {
  const number = getRandomNumber(100);
  const excerciseText = number;
  const rightAnswer = getRightAnswer(number);

  return cons(excerciseText, rightAnswer);
};

const runBrainPrime = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainPrime;
