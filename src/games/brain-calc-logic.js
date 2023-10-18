#!/usr/bin/env node

import { welcomeUser, gameEngine } from '../index.js';

export default function calc() {
  const userName = welcomeUser();

  const gameInstructions = 'What is the result of the expression?';

  function gameLogic() {
    const operators = ['+', '-', '*'];
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

    let correctAnswer;

    switch (randomOperator) {
      case '+':
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case '*':
        correctAnswer = randomNumber1 * randomNumber2;
        break;
      default:
        console.error(`Invalid operator: ${randomOperator}`);
    }

    const randomQuestion = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    return [randomQuestion, correctAnswer];
  }

  gameEngine(gameLogic, gameInstructions, userName);
}
