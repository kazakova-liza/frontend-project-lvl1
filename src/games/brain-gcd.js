import { cons } from '@hexlet/pairs';

import gamesEngine from '../games-engine/engine';

const excerciseMessage = 'Find the greatest common divisor of given numbers. \n';

const getQuestionAndRightAnswer = () => {
  const getRightAnswer = (number1, number2) => {
    if (number1 === number2) {
      return number1;
    }
    if (number1 > number2 && number1 % number2 === 0) {
      return number2;
    }
    if (number2 > number1 && number2 % number1 === 0) {
      return number1;
    }
    if (number1 > number2 && number1 % number2 !== 0) {
      for (let dividor = number2 - 1; dividor > 0; dividor--) {
        if (number2 % dividor === 0 && number1 % dividor === 0) {
          return dividor;
        }
      }
    }
    if (number2 > number1 && number2 % number1 !== 0) {
      for (let dividor = number1 - 1; dividor > 0; dividor--) {
        if (number1 % dividor === 0 && number2 % dividor === 0) {
          return dividor;
        }
      }
    }
  };

  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);

  const excerciseText = `${number1} ${number2}`;

  const rightAnswer = getRightAnswer(number1, number2);

  return cons(excerciseText, rightAnswer);
};

const runBrainGcd = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainGcd;
