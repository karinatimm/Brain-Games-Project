import { runGameEngine, generateRandomNumber } from '../index.js';

export default function findGreatestCommonDivisorGame() {
  const gameInstructions = 'Find the greatest common divisor of given numbers.';

  function calculateGCD(num1, num2) {
    let a = num1;
    let b = num2;
    while (b !== 0) {
      const temp = a;
      a = b;
      b = temp % b;
    }
    return a;
  }

  function generateGameLogic() {
    const randomNumber1 = generateRandomNumber();
    const randomNumber2 = generateRandomNumber();
    const correctAnswer = calculateGCD(randomNumber1, randomNumber2).toString();

    const randomQuestion = `${randomNumber1} ${randomNumber2}`;
    return [randomQuestion, correctAnswer];
  }

  runGameEngine(generateGameLogic, gameInstructions);
}
