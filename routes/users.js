const users = require("express").Router();
const db = require("../config");

users.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, users) => {
    if (err) throw err;
    res.json(users);
  });
});

users.post("/", (req, res) => {
  db.query("INSERT INTO users SET ?", req.body, (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

users.put("/:id", (req, res) => {
  db.query(
    "UPDATE users SET ? WHERE ?",
    [req.body, { id: req.params.id }],
    (err) => {
      if (err) throw err;
      res.sendStatus(200);
    }
  );
});

users.delete("/:id", (req, res) => {
  db.query("DELETE FROM users WHERE ?", { id: req.params.id }, (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

module.exports = users;
