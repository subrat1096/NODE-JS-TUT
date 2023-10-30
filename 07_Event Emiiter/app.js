const collectAnswers = require("./lib/lib");
const fs = require("fs");

const questions = [
  "What is your name?",
  "Where do you live?",
  "What is your profession?",
  "What skills do you have?",
  "Why you want to learn Node.js?",
];

const answerEvents = collectAnswers(questions, (answers) => {
  let data;
  let ansArray = [];
  ansArray.push(`Name: ${answers[0]}\n`);
  ansArray.push(`Address: ${answers[1]}\n`);
  ansArray.push(`Profession: ${answers[2]}\n`);
  ansArray.push(`Skills: ${answers[3]}\n`);
  ansArray.push(`Reason for learning Node.js: ${answers[4]}\n`);
  ansArray.push("Thank you for your answers");
  data = ansArray.join("").toString();
  fs.writeFileSync("data.txt", data);
  process.exit();
});

answerEvents.on("answer", (answer) => console.log(`The answer is ${answer}`));
