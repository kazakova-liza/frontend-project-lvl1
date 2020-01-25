
import readlineSync from 'readline-sync';

const runBrainGames = () => {
  readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
};

export default runBrainGames;
