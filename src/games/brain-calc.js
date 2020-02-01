import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

import getRandomNumber from '../utils';

const excerciseMessage = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const operatorNumber = getRandomNumber(0, operators.length - 1);
  return operators[operatorNumber];
};

let rightAnswer;

const getQuestionAndRightAnswer = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

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

  const excercise = `${number1} ${operator} ${number2}`;

  return cons(excercise, rightAnswer.toString());
};


const runBrainCalc = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainCalc;
