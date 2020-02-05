
import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../utils';

const excerciseMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndRightAnswer = () => {
  const number = getRandomNumber(1, 100);
  const excercise = number;
  const rightAnswer = (isPrime(number) === true) ? 'yes' : 'no';

  return cons(excercise, rightAnswer);
};

const runBrainPrime = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainPrime;
