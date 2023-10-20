import { runGameEngine, generateRandomNumber } from '../index.js';

const isNumberEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export default function isEvenNumberGame() {
  const gameInstructions = 'Answer "yes" if the number is even, otherwise answer "no".';

  function generateGameLogic() {
    const randomNumber = generateRandomNumber();

    const randomQuestion = `${randomNumber}`;
    const correctAnswer = isNumberEven(randomNumber);

    return [randomQuestion, correctAnswer];
  }

  runGameEngine(generateGameLogic, gameInstructions);
}
