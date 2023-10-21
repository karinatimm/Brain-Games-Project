import { runGameEngine, generateRandomNumber } from '../index.js';

const calculateGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = a;
    a = b;
    b = temp % b;
  }
  return a;
};

const generateGameLogic = () => {
  const randomNumber1 = generateRandomNumber(0, 100);
  const randomNumber2 = generateRandomNumber(0, 100);
  const correctAnswer = calculateGCD(randomNumber1, randomNumber2).toString();

  const randomQuestion = `${randomNumber1} ${randomNumber2}`;
  return [randomQuestion, correctAnswer];
};

const runFindGreatestCommonDivisorGame = () => {
  const gameInstruction = 'Find the greatest common divisor of given numbers.';

  runGameEngine(generateGameLogic, gameInstruction);
};

export default runFindGreatestCommonDivisorGame;
