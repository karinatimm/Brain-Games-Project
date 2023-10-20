import { runGameEngine, generateRandomNumber } from '../index.js';

const generateProgression = (
  progrLength,
  indexOfHiddenNum,
  firstNumInProgr,
  differenceInProgr,
) => {
  const generatedProgression = [];

  for (let i = 0; i < progrLength; i += 1) {
    if (i === indexOfHiddenNum) {
      generatedProgression.push('..');
    } else {
      generatedProgression.push(firstNumInProgr + i * differenceInProgr);
    }
  }
  return generatedProgression;
};

const generateGameLogic = () => {
  const minLength = 5;
  const maxLength = 10;
  const progrLength = (generateRandomNumber() % (maxLength - minLength + 1)) + minLength;

  // between 0 and 100(inclusive)
  const firstNumInProgr = generateRandomNumber();

  // between 1 and 10(inclusive)
  const differenceInProgr = (generateRandomNumber() % 10) + 1;

  // between 1 and progrLength(excluded)
  const indexOfHiddenNum = (generateRandomNumber() % (progrLength - 1)) + 1;

  const randomQuestion = generateProgression(
    progrLength,
    indexOfHiddenNum,
    firstNumInProgr,
    differenceInProgr,
  ).join(' ');

  const correctAnswer = `${
    firstNumInProgr + indexOfHiddenNum * differenceInProgr
  }`;

  return [randomQuestion, correctAnswer];
};

const runFindMissingNumInProgressionGame = () => {
  const gameInstruction = 'What number is missing in the progression?';

  runGameEngine(generateGameLogic, gameInstruction);
};

export default runFindMissingNumInProgressionGame;
