import { runGameEngine, generateRandomNumber } from '../index.js';

function generateProgression(
  progrLength,
  indexOfHiddenNum,
  firstNumInProgr,
  differenceInProgr,
) {
  const generatedProgression = [];

  for (let i = 0; i < progrLength; i += 1) {
    if (i === indexOfHiddenNum) {
      generatedProgression.push('..');
    } else {
      generatedProgression.push(firstNumInProgr + i * differenceInProgr);
    }
  }
  return generatedProgression.join(' ');
}

export default function findMissingNumInProgressionGame() {
  const gameInstructions = 'What number is missing in the progression?';

  function generateGameLogic() {
    const minLength = 5;
    const maxLength = 10;
    const progrLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

    // between 0 and 100(inclusive)
    const firstNumInProgr = generateRandomNumber();

    // between 1 and 10(inclusive)
    const differenceInProgr = Math.floor(Math.random() * 10) + 1;

    // between 1 and progrLength(excluded)
    const indexOfHiddenNum = Math.floor(Math.random() * progrLength);

    const randomQuestion = generateProgression(
      progrLength,
      indexOfHiddenNum,
      firstNumInProgr,
      differenceInProgr,
    );

    const correctAnswer = `${
      firstNumInProgr + indexOfHiddenNum * differenceInProgr
    }`;

    return [randomQuestion, correctAnswer];
  }

  runGameEngine(generateGameLogic, gameInstructions);
}
