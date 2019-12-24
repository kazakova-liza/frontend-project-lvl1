
import { cons } from '@hexlet/pairs';

export const excerciseMessage = 'What number is missing in the progression? \n';

export const getQuestionAndRightAnswer = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 100);
  const hiddenNumberIndex = Math.floor(Math.random() * 10);
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
