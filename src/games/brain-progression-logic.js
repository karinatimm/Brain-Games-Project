#!/usr/bin/env node

import { welcomeUser, gameEngine } from '../index.js';

export default function findMissNumInProgression() {
  const userName = welcomeUser();

  const gameInstructions = 'What number is missing in the progression?';

  function gameLogic() {
    const minLength = 5;
    const maxLength = 10;
    const progrLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

    const progression = [];

    // between 0 and 100(included)
    const firstNumInProgr = Math.round(Math.random() * 100);

    // between 1 and 10(included)
    const differenceInProgr = Math.floor(Math.random() * 10) + 1;

    // between 1 and progrLength(excluded)
    const indexOfHiddenNum = Math.floor(Math.random() * progrLength);

    for (let i = 0; i < progrLength; i += 1) {
      if (i === indexOfHiddenNum) {
        progression.push('..');
      } else {
        progression.push(firstNumInProgr + i * differenceInProgr);
      }
    }
    const randomQuestion = progression.join(' ');

    const correctAnswer = firstNumInProgr + indexOfHiddenNum * differenceInProgr;

    return [randomQuestion, correctAnswer];
  }

  gameEngine(gameLogic, gameInstructions, userName);
}
