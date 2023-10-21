import { runGameEngine, generateRandomNumber } from '../index.js';

const generateProgression = (
  progrLength,
  firstNumInProgr,
  differenceInProgr,
) => {
  const progression = [];

  for (let i = 0; i < progrLength; i += 1) {
    progression.push(firstNumInProgr + i * differenceInProgr);
  }

  return progression;
};

const generateGameLogic = () => {
  const minLength = 5;
  const maxLength = 10;
  const progrLength = generateRandomNumber(minLength, maxLength);

  // between 0 and 100(inclusive)
  const firstNumInProgr = generateRandomNumber();

  // between 1 and 10(inclusive)
  const minDifference = 1;
  const maxDifference = 10;
  const differenceInProgr = generateRandomNumber(minDifference, maxDifference);

  // between 1 and progrLength(excluded)
  const minIndexOfHiddenNum = 1;
  const maxIndexOfHiddenNum = progrLength - 1;
  const indexOfHiddenNum = generateRandomNumber(
    minIndexOfHiddenNum,
    maxIndexOfHiddenNum,
  );

  const generatedProgression = generateProgression(
    progrLength,
    firstNumInProgr,
    differenceInProgr,
  );

  // hide number
  generatedProgression[indexOfHiddenNum] = '..';

  const randomQuestion = generatedProgression.join(' ');

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
