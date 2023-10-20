import { runGameEngine, generateRandomNumber } from '../index.js';

function isNumberPrime(number) {
  if (number < 2) {
    return 'no';
  }

  for (let divider = 2; divider <= number / 2; divider += 1) {
    if (number % divider === 0) {
      return 'no';
    }
  }
  return 'yes';
}

export default function isPrimeNumberGame() {
  const gameInstructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  function generateGameLogic() {
    const randomNumber = generateRandomNumber();

    const randomQuestion = `${randomNumber}`;
    const correctAnswer = isNumberPrime(randomNumber);

    return [randomQuestion, correctAnswer];
  }

  runGameEngine(generateGameLogic, gameInstructions);
}
