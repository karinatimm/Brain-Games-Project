import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const runGameEngine = (generateGameLogic, gameInstruction) => {
  const userName = welcomeUser();

  console.log(gameInstruction);

  const numberOfAttempts = 3;

  for (let attempt = 0; attempt < numberOfAttempts; attempt += 1) {
    const [randomQuestion, correctAnswer] = generateGameLogic();

    console.log(`Question: ${randomQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
