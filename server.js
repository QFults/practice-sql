const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "users_db",
});

app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, users) => {
    if (err) throw err;
    res.json(users);
  });
});

// const user = {
//   username: 'johndoe',
//   age: 21
// }

app.post("/api/users", (req, res) => {
  db.query("INSERT INTO users SET ?", req.body, (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

// const condition = { username: "janedoe" };
// const updates = { age: 25 };

app.put("/api/users/:id", (req, res) => {
  db.query(
    "UPDATE users SET ? WHERE ?",
    [req.body, { id: req.params.id }],
    (err) => {
      if (err) throw err;
      res.sendStatus(200);
    }
  );
});

// const condition = { username: "johndoe" };

app.delete("/api/users/:id", (req, res) => {
  db.query("DELETE FROM users WHERE ?", { id: req.params.id }, (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.listen(3001);
