process.stdout.write("hello");

const questions = [
  "What is your name?",
  "What would you like to do?",
  "What is your preferred programming language?",
];

const answers = [];

function ask(i = 0) {
  process.stdout.write(`\n\n\n${questions[i]}`);
  process.stdout.write("\n>");
}

ask();
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  process.stdout.write("\n\n");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
  );
});
