#!/usr/bin/env node

import { welcomeUser, gameEngine } from '../index.js';

export default function findGCD() {
  const userName = welcomeUser();

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

  function gameLogic() {
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = calculateGCD(randomNumber1, randomNumber2);

    const randomQuestion = `${randomNumber1} ${randomNumber2}`;
    return [randomQuestion, correctAnswer];
  }

  gameEngine(gameLogic, gameInstructions, userName);
}
