const posts = require("express").Router();
const db = require("../config");

posts.get("/", (req, res) => {
  const sql = `
    SELECT posts.title, posts.id, posts.text, users.username AS author FROM posts JOIN users ON posts.userId = users.id;
  `;
  db.query(sql, (err, posts) => {
    if (err) throw err;
    res.json(posts);
  });
});

posts.post("/", (req, res) => {
  db.query("INSERT INTO posts SET ?", req.body, (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

posts.put("/:id", (req, res) => {
  db.query(
    "UPDATE posts SET ? WHERE ?",
    [req.body, { id: req.params.id }],
    (err) => {
      if (err) throw err;
      res.sendStatus(200);
    }
  );
});

posts.delete("/:id", (req, res) => {
  db.query("DELETE FROM posts WHERE ?", { id: req.params.id }, (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

module.exports = posts;
