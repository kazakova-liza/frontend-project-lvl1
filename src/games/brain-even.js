import { cons } from '@hexlet/pairs';

import gamesEngine from '../engine';

const excerciseMessage = 'Answer "yes" if the number is even, otherwise answer "no"\n';

const getQuestionAndRightAnswer = () => {
  const number = Math.floor(Math.random() * 10);
  const excerciseText = `Question: ${number}`;

  const getRightAnswer = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const rightAnswer = getRightAnswer(number);

  return cons(excerciseText, rightAnswer);
};

const runBrainEven = () => {
  gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
};

export default runBrainEven;
