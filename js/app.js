'use strict';
let questionNum = 1;
let totalCorrect = 0; // Variable to keep track of correct answers

// Welcome Message
const userName = prompt('What is your name?');
alert(`Welcome to Latherio's Page, ${userName}!`);

// Guessing Game
const questions = [
    'Did I serve in the Air Force from 2015-2019?',
    'Have I met Pope Francis?',
    'Do I have a 5-year-old daughter?',
    'Is my goal to make a positive impact through technology?',
    'Am I a certified cybersecurity professional?',
];

const correctAnswers = ['yes', 'yes', 'yes', 'yes', 'yes'];

for (let i = 0; i < questions.length; i++) {
    const userAnswer = prompt(questions[i]).toLowerCase();
    if (userAnswer === correctAnswers[i] || userAnswer === 'y') {
        console.log(`Question ${i + 1}: Correct!`);
        alert(`Question ${i + 1}: Correct!`);
        totalCorrect++; // Increment the total correct count
    } else {
        console.log(`Question ${i + 1}: Incorrect!`);
        alert(`Question ${i + 1}: Incorrect!`);
    }
}

// Loop to give 4 chances
const correctNumber = 31; // You can change this to your actual age.
let attempts = 4;
let isCorrect = false;

while (attempts > 0) {
    const userGuess = parseInt(prompt("Guess my age?"));

    if (userGuess === correctNumber) {
        alert("Congratulations, you guessed correctly!");
        isCorrect = true;
        break; // Exit the loop because the answer is correct.
    } else if (userGuess < correctNumber) {
        alert("Too low. Try again.");
    } else {
        alert("Too high. Try again.");
    }

    attempts--;
}

if (isCorrect) {
    totalCorrect++; // Increment the total correct count
} else {
    alert(`Sorry, you've used up all your attempts. My age is ${correctNumber}.`);
}

// 7th Question: Guess the Color
const colorGuess = ["red", "blue", "green", "gold", "purple", "orange", "pink"];
let nextAttempts = 6; // 6 attempts to guess
let correctColor = false;

while (nextAttempts > 0) {
    const userColor = prompt("Guess a color:").toLowerCase();
    if (colorGuess.includes(userColor)) {
        alert("Correct! That's one of the possible colors.");
        correctColor = true;
        break;
    } else {
        alert(`Incorrect. You have ${nextAttempts - 1} attempts left.`);
    }
    nextAttempts--;
}

if (correctColor) {
    totalCorrect++; // Increment the total correct count
} else {
    alert(`Sorry, you've used up all your color guessing attempts. Possible colors were: ${colorGuess.join(", ")}.`);
}

// Display Possible Correct Colors
alert(`Possible correct colors were: ${colorGuess.join(", ")}.`);

// Display the total number of correct answers
alert(`You got ${totalCorrect} correct out of 7 questions.`);

// Final Message
alert(`Thank you for visiting my page, ${userName}!`);
