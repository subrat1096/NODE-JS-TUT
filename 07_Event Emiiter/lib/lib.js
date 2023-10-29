const readline = require("readline");
const { EventEmitter } = require("events");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const collectAnswers = (questions, done) => {
  let answers = [];

  const [firstQuestion] = questions;

  const emitter = new EventEmitter();

  const questionAnswered = (ans) => {
    emitter.emit("answer", ans);
    answers.push(ans.toString().trim());

    if (answers.length < questions.length) {
      rl.question(`${questions[answers.length]}\n`, questionAnswered);
    } else {
      return done(answers);
    }
  };

  rl.question(`${firstQuestion}\n`, questionAnswered);

  return emitter;
};

module.exports = collectAnswers;
