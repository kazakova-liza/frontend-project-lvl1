
export const excerciseMessage = 'What is the result of the expression? \n';

const getRandomIntFromMinToMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const chooseOperator = (opperatorNumber) => {
  const operator1 = '+';
  const operator2 = '-';
  const operator3 = '*';

  if (opperatorNumber === 1) {
    return operator1;
  }
  if (opperatorNumber === 2) {
    return operator2;
  }
  if (opperatorNumber === 3) {
    return operator3;
  }
};

const getRightAnswerCalculator = (number1, number2, operatorNumber) => {
  if (operatorNumber === 1) {
    return number1 + number2;
  }
  if (operatorNumber === 2) {
    return number1 - number2;
  }
  if (operatorNumber === 3) {
    return number1 * number2;
  }
};

const operatorNumber = getRandomIntFromMinToMax(1, 3);
const operator = chooseOperator(operatorNumber);
const number1 = Math.floor(Math.random() * 100);
const number2 = Math.floor(Math.random() * 100);

export const excerciseText = `${number1} ${operator} ${number2}`;

export const rightAnswer = getRightAnswerCalculator(number1, number2, operatorNumber);
