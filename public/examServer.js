const express = require("express");
const app = express();
const router = express.Router();

app.get("*.js", function (req, res, next) {
  res.setHeader("Content-Type", "application/javascript");
  next();
});

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/exam.html");
});

module.exports = router;
