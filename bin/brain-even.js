#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

export default function isEven() {
  let numberOfAnswers = 0;

  while (numberOfAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isEvenNumber = randomNumber % 2 === 0;

    if (
      (isEvenNumber && userAnswer === 'yes')
      || (!isEvenNumber && userAnswer === 'no')
    ) {
      console.log('Correct!\n');
      numberOfAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${
          randomNumber % 2 === 0 ? 'yes' : 'no'
        }'.\n Let's try again, ${userName}!`,
      );
      break;
    }
  }
  if (numberOfAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
isEven();
