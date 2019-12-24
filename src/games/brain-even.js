import { cons } from '@hexlet/pairs';

export const excerciseMessage = 'Answer "yes" if the number is even, otherwise answer "no"\n';

export const getQuestionAndRightAnswer = () => {
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
