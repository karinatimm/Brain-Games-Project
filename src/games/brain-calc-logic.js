import { runGameEngine, generateRandomNumber } from '../index.js';

function getResultOfMathExpression(num1, num2, randomOperator) {
  switch (randomOperator) {
    case '+':
      return `${num1 + num2}`;
    case '-':
      return `${num1 - num2}`;
    case '*':
      return `${num1 * num2}`;
    default:
      throw new Error(`Invalid operator: ${randomOperator}`);
  }
}

export default function calculateMathExpressionGame() {
  const gameInstructions = 'What is the result of the expression?';

  function generateGameLogic() {
    const operators = ['+', '-', '*'];
    const randomNumber1 = generateRandomNumber();
    const randomNumber2 = generateRandomNumber();
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

    const randomQuestion = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    const correctAnswer = getResultOfMathExpression(
      randomNumber1,
      randomNumber2,
      randomOperator,
    );
    return [randomQuestion, correctAnswer];
  }

  runGameEngine(generateGameLogic, gameInstructions);
}
