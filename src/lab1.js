const express = require("express");
const app = express();

// Todo import `todos` from `../data/todos.json`
// todos will be used as an array of data

const todos = require("../data/todos.json");

app.get("/ping", (req, res) => {
  res.json("pong");
});

// Todo: complete this endpoint to return the json list of todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Todo: complete this endpoint to return the todo json object
// that correspond to a `todoId` parameter
// if the todoId does not exists return an http status of 404
// with "todo not found"
app.get("/todos/:todoId/:todoUser", (req, res) => {
  const todoId = req.params.todoId;
  const todoUser = req.params.todoUser;
  console.log(todoId); // Extraire et convertir todoId en entier
  const todo = todos.find(t => t.id == todoId);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  
  if (todo.userId == todoUser) {
    res.json(todo.title);
  } else {
    return res.status(403).json({ message: "Vous n'avez pas l'autorisation" });
  }
})

// Todo: complete this endpoint to return the todo json object
// that correspond to a `todoId` parameter and `userId`
// if the todoId or userId does not exists return an http status of 404
// with "todo not found"
app.get("", (req, res) => {
  //
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000....");
});
