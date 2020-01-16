import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../index';

const excerciseMessage = 'What is the result of the expression? \n';

const getRandomIntFromMinToMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => {
  const operatorNumber = getRandomIntFromMinToMax(1, 3);

  switch (operatorNumber) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
  }
};

const getQuestionAndRightAnswer = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);

  let rightAnswer = '';

  const operator = getRandomOperator();

  switch (operator) {
    case '+':
      rightAnswer = number1 + number2;
      break;
    case '-':
      rightAnswer = number1 - number2;
      break;
    case '*':
      rightAnswer = number1 * number2;
      break;
    default:
  }

  const excerciseText = `${number1} ${operator} ${number2}`;

  return cons(excerciseText, rightAnswer);
};


const runBrainCalc = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainCalc;
