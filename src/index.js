import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const sayHello = (userName) => {
  console.log(`Hello, ${userName}! \n`);
};

export const showQuestion = (number) => {
  const question = `Question: ${number}`;
  console.log(question);
};

export const getAnAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const getRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  if (number % 2 !== 0) {
    return 'no';
  }
};

export const showMessageIfWrongAnswer = (answer, rightAnswer, userName) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
};

export const checkAnswer = (answer, rightAnswer) => {
  if (answer === rightAnswer) {
    return true;
  }
  return false;
};

export const showExpression = (number1, number2, operator) => {
  console.log(`${number1} ${operator} ${number2}`);
};

export const getRandomIntFromMinToMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const chooseOperator = (opperatorNumber) => {
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

export const getRightAnswerCalculator = (number1, number2, operatorNumber) => {
  if (operatorNumber === 1) {
    return number1 + number2;
  }
  if (operatorNumber === 2) {
    return number1 - number2;
  }
  if (operatorNumber === 3) {
    return number1 * number2;
  }
}
;