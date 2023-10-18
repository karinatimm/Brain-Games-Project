#!/usr/bin/env node

import readlineSync from 'readline-sync';

export function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export function gameEngine(gameLogic, gameInstructions, userName) {
  console.log(gameInstructions);

  let numberOfAnswers = 0;

  while (numberOfAnswers < 3) {
    const [randomQuestion, correctAnswer] = gameLogic();

    console.log(`Question: ${randomQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
      numberOfAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`,
      );
      break;
    }
  }

  if (numberOfAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
