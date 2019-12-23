
export const excerciseMessage = 'Answer "yes" if the number is even, otherwise answer "no"\n';

const number = Math.floor(Math.random() * 10);

export const excerciseText = `Question: ${number}`;

const getRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const rightAnswer = getRightAnswer(number);
