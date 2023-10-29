const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const collectAnswers = (questions, done) => {
  let answers = [];
  const [firstQuestion] = questions;
  const questionAnswered = (ans) => {
    answers.push(ans.toString().trim());
    if (answers.length < questions.length) {
      rl.question(`${questions[answers.length]}\n`, questionAnswered);
    } else {
      return done(answers);
    }
  };
  rl.question(`${firstQuestion}\n`, questionAnswered);
};

module.exports = collectAnswers;
