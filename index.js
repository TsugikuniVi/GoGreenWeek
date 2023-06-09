const express = require("express");
const app = express();
const port = 8888;

const questions = require("./questions.js");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/jobs",  (req, res) => { 
  res.sendFile(__dirname + "/public/jobs.html");
 })

app.get("/question/:difficulty", (req, res) => {
  const { difficulty } = req.params;
  const questionsByDifficulty = questions[difficulty];
  const randomQuestion =
    questionsByDifficulty[
      Math.floor(Math.random() * questionsByDifficulty.length)
    ];
  res.send(randomQuestion);
});

app.get("/questions", (req, res) => {
  res.send(questions);
});

const examRouter = require("./public/examServer.js");

app.use("/exam", examRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
