const collectAnswers = require("./lib/lib");

const questions = [
  "What is your name?",
  "Where do you live?",
  "What is your profession?",
  "What skills do you have?",
  "Why you want to learn Node.js?",
];

collectAnswers(questions, (answers) => {
  console.log(`Name: ${answers[0]}`);
  console.log(`Address: ${answers[1]}`);
  console.log(`Profession: ${answers[2]}`);
  console.log(`Skills: ${answers[3]}`);
  console.log(`Reason for learning Node.js: ${answers[4]}`);
  console.log("Thank you for your answers");
  process.exit();
});
