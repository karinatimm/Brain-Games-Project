#!/usr/bin/env node

import { welcomeUser, gameEngine } from '../index.js';

export default function isPrimeNumber() {
  const userName = welcomeUser();

  const gameInstructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  function gameLogic() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    const arrOfDividers = [];

    for (let i = 1; i <= randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        arrOfDividers.push(i);
      }
    }

    const randomQuestion = randomNumber;
    const correctAnswer = arrOfDividers.length === 2
      && arrOfDividers[0] === 1
      && arrOfDividers[arrOfDividers.length - 1] === randomNumber
      ? 'yes'
      : 'no';

    return [randomQuestion, correctAnswer];
  }

  gameEngine(gameLogic, gameInstructions, userName);
}
