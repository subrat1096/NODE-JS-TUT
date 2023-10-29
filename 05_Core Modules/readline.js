const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("How do you like nodejs ? ", (ans) => {
//   console.log(`your answer: ${ans}`);
//   process.exit();
// });

const questions = [
  "What is your name?",
  "Where are you from?",
  "What are you going to do with node.js?",
];

function collectAnswers(questions, done) {
  let answers = [];
  const questionAnswered = (ans) => {
    answers.push(ans.trim());
    if (answers.length < questions.length) {
      rl.question(`${questions[answers.length]}\n`, questionAnswered);
    } else {
      return done(answers);
    }
  };
  rl.question(`${questions[0]}\n`, questionAnswered);
}

collectAnswers(questions, (answers) => {
  console.log(`Thanks for your answer`);
  console.log(answers);
  rl.close();
});
