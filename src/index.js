import readlineSync from 'readline-sync';

export const sayHello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const showQuestion = () => {
  const question = `Question:${Math.floor(Math.random() * 10)}`;
  console.log(question);
};

export const showAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  console.log(answer);
};
