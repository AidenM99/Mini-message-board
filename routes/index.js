var express = require("express");
const { response } = require("../app");
var router = express.Router();

const formatDate = (date) => {
  const toString = date.toString();
  const newDate = `${toString
    .split(" ")
    .slice(1, 4)
    .join(" ")} at ${toString.slice(16, 21)} (UTC)`;

  return newDate;
};

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: formatDate(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formatDate(new Date()),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini messageboard", messages: messages });
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: formatDate(new Date()),
  });

  res.redirect("/");
});

module.exports = router;
