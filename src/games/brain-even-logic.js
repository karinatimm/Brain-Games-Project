import { runGameEngine, generateRandomNumber } from '../index.js';

const isNumberEven = (num) => num % 2 === 0;

const generateGameLogic = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const correctAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const runIsEvenNumberGame = () => {
  const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGameEngine(generateGameLogic, gameInstruction);
};

export default runIsEvenNumberGame;
