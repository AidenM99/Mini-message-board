var express = require("express");
var router = express.Router();

const formatDate = (date) => {
  const toString = date.toString();
  const newDate = toString.split(" ").slice(0, 6).join(" ");

  return `Sent at ${newDate}`;
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

module.exports = router;
