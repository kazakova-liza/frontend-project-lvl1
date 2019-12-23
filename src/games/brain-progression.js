
export const excerciseMessage = 'What number is missing in the progression? \n';

const firstNumber = Math.floor(Math.random() * 100);
const step = Math.floor(Math.random() * 100);
const hiddenNumberIndex = Math.floor(Math.random() * 10);

let hiddenNumber = '';

const showProgression = (firstNumber, step, hiddenNumberIndex) => {
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
  return progression;
};

export const excerciseText = showProgression(firstNumber, step, hiddenNumberIndex);

export const rightAnswer = hiddenNumber;
