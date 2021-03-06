const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "1) Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = ["1) Who was the first American woman in space? ","2) True or false: 5 kilometer == 5000 meters? ", "3) (5 + 3)/2 * 10 = ? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]
let candidateAnswers = []
let correctScore = 0

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("Hello candidate, please enter your name: ");
 console.log("Welcome " + candidateName + " please prepare for your evaluatory quiz.");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++) {
candidateAnswer = input.question(questions[i]);
candidateAnswers.push(candidateAnswer);
}
console.log(candidateAnswers);
}


function gradeQuiz() {
  console.log(`Candidate Name: ${candidateName}`);


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (let i = 0; i < correctAnswers.length; i++) {
  console.log(questions[i]);
  console.log(`Your Answer: ${candidateAnswers[i]} \nCorrect Answer: ${correctAnswers[i]}`);



}
for (let i = 0; i < correctAnswers.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    correctScore++;
  }
}


let grade = correctScore / correctAnswers.length * 100;
  



console.log(`>>> Overall Grade: ${grade}% (${correctScore} out of 5 responses correct) <<<`);
if (correctScore >= 4) {
  console.log(`>>> Status: PASSED <<<`);
} else if (correctScore < 4) {
    console.log(`>>> Status: FAILED <<<`);
  }

}




function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};