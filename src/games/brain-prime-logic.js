import { runGameEngine, generateRandomNumber } from '../index.js';

const isNumberPrime = (num) => {
  if (num < 2) return false;

  for (let divider = 2; divider <= num / 2; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }

  return true;
};

const generateGameLogic = () => {
  const randomNumber = generateRandomNumber();

  const correctAnswer = isNumberPrime(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const runIsPrimeNumberGame = () => {
  const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runGameEngine(generateGameLogic, gameInstruction);
};

export default runIsPrimeNumberGame;
