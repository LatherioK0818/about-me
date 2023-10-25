'use strict'
let questionNum;

// Welcome Message
const userName = prompt('What is your name?');
alert(`Welcome to Latherio's Page, ${userName}!`);

// Guessing Game
const questions = [
    'Did I serve in the Air Force from 2015-2019?',
    'Have I met Pope Francis?',
    'Do I have a 5-year-old daughter?',
    'Is my goal to make a positive impact through technology?',
    'Am I a certified cybersecurity professional?'
];

const correctAnswers = ['yes', 'yes', 'yes', 'yes', 'yes'];

for (let i = 0; i < questions.length; i++) {
    const userAnswer = prompt(questions[i]).toLowerCase();
    if (userAnswer === correctAnswers[i] || userAnswer === 'y') {
        console.log(`Question ${i + 1}: Correct!`);
        alert(`Question ${i + 1}: Correct!`);
    } else {
        console.log(`Question ${i + 1}: Incorrect!`);
        alert(`Question ${i + 1}: Incorrect!`);
    }
}

// Final Message
alert(`Thank you for visiting my page, ${userName}!`);

