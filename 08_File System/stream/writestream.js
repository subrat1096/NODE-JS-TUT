const fs = require("fs");

let answersStream;

let questions = [
  "What is your name?",
  "Where do you live?",
  "How old are you?",
  "Why you want to learn nodejs?",
];

let answers = [];

function ask(i) {
  process.stdout.write(`\n${questions[i]}\n`);
  process.stdout.write(">");
}

process.stdin.once("data", (data) => {
  let name = data.toString().trim();
  let fileName = `./${name}.md`;
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
  }

  answersStream = fs.createWriteStream(fileName);
  answersStream.write(`Questions Answers for ${name}\n=================\n`);
});

process.stdin.on("data", (data) => {
  let answer = data.toString().trim();
  answersStream.write(`Question : ${questions[answers.length]}\n`);
  answersStream.write(`Answer : ${answer}\n`, () => {
    if (answers.length < questions.length) {
      ask(answers.length);
    } else {
      process.exit();
    }
  });
  answers.push(answer);
});

process.on("exit", () => {
  answersStream.close();
  process.stdout.write("\n\n\n");
  process.stdout.write(
    `${answers[0]} lives at ${answers[1]}, he is ${answers[2]} yrs old. He wants to learn node because ${answers[3]}`
  );
  process.stdout.write("\n\n\n");
});

ask(answers.length);
