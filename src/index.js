import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const sayHello = (userName) => {
  console.log(`Hello, ${userName}! \n`);
};

export const getAnAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
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
