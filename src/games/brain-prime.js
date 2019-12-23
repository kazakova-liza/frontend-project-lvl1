
export const excerciseMessage = 'Answer "yes" if given number is prime. Otherwise answer "no". \n';

const number = Math.floor(Math.random() * 100);

export const excerciseText = number;

const isPrime = (number) => {
  if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
    return true;
  }
  return false;
};

const getRightAnswer = (number) => {
  if (isPrime(number) === true) {
    return 'yes';
  }
  return 'no';
};

export const rightAnswer = getRightAnswer(number);
