const express = require("express");
const app = express();

const todos = require("../data/todos.json");

// Todo import `todos` from `../data/todos.json`
// todos will be used as an array of data

app.get("/ping", (req, res) => {
  console.log(req);
  res.json("pong");
});

// Todo: Implement an endpoint that handles two query parameters: 'limit' and 'search'
// Here are some examples:
//  /api/todos/?limit=30
//  /api/todos/?search='totam'
//  /api/todos/?limit=30&search='totam'
// The endpoint should filter and return todos based on 'limit' and 'search'
// limit: should limit the number of todos returned to the client to the value of limit
// search: should return only the todos that contains search text value in the title
app.get("/api/todos", (req, res) => {
  console.log(req.query); 
  let { limit, search } = req.query; 
  let filteredTodos = todos;

  if (search) {
    filteredTodos = filteredTodos.filter(todo =>
      todo.title.includes(search)
    );

   if (filteredTodos.length === 0) {
      res.status(404).json({ message: "Aucun todo trouvé" });
    }
  }

 if (limit) {
    limit = parseInt(limit);
    if(isNaN(limit)){
      res.json({ message: "Rentrez un nombre" });
    }else{
      filteredTodos = filteredTodos.slice(0, limit);
    }
    
  }

  res.json(filteredTodos);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000....");
});
