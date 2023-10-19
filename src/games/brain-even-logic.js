#!/usr/bin/env node

import { welcomeUser, gameEngine } from '../index.js';

export default function isEven() {
  const userName = welcomeUser();

  const gameInstructions = 'Answer "yes" if the number is even, otherwise answer "no".';

  function gameLogic() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    const randomQuestion = randomNumber;
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    return [randomQuestion, correctAnswer];
  }

  gameEngine(gameLogic, gameInstructions, userName);
}
