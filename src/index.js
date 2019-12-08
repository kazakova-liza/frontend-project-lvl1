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
};

export const showTwoRandomNumbers = (number1, number2) => {
  console.log(`${number1} ${number2}`);
};

export const getRightAnswerGcd = (number1, number2) => {
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

export const showProgression = (firstNumber, step, hiddenNumberIndex) => {
  let progression = `${firstNumber}`;
  let hiddenNumber = '';
  let newNumber = firstNumber + step;
  for (let i = 0; i < 9; i++) {
    if (i === hiddenNumberIndex) {
      progression += ' ..';
      hiddenNumber = newNumber;
    }
    else {
    progression += ` ${newNumber}`;
    }
    newNumber += step;
  }
  console.log(progression);
  return hiddenNumber;
};

export const getRightAnswerProgression = (firstNumber, step, hiddenNumber) => 1;
