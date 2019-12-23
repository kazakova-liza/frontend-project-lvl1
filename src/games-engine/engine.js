
import {
  getUserName, getAnAnswer, sayHello, checkAnswer, showMessageIfWrongAnswer,
} from '..';


const gamesEngine = (excerciseMessage, excerciseText, rightAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(excerciseMessage);

  const userName = getUserName();

  sayHello(userName);

  let rightAnswersCount = 0;

  for (rightAnswersCount = 0; rightAnswersCount < 3; rightAnswersCount += 1) {
    console.log(excerciseText);

    const answer = getAnAnswer();

    if (checkAnswer(answer, rightAnswer.toString()) === true) {
      console.log('Correct!');
    } else {
      showMessageIfWrongAnswer(answer, rightAnswer, userName);
      break;
    }
  }

  if (rightAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gamesEngine;
