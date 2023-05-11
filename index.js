const express = require("express");
const app = express();
const port = 3000;

const questions = require("./questions.js");

app.use(express.static("public"));

app.get(["/", "/easy", "/medium", "/hard"], (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/question/:difficulty", (req, res) => {
  const { difficulty } = req.params;
  const questionsByDifficulty = questions[difficulty];
  const randomQuestion =
    questionsByDifficulty[
      Math.floor(Math.random() * questionsByDifficulty.length)
    ];
  res.send(randomQuestion);
});

const examRouter = require("./public/examServer.js");

app.use("/exam", examRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
