import readlineSync from 'readline-sync';

export function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export function runGameEngine(generateGameLogic, gameInstructions) {
  const userName = welcomeUser();

  console.log(gameInstructions);

  for (let numberOfAnswers = 0; numberOfAnswers < 3; numberOfAnswers += 1) {
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
}
