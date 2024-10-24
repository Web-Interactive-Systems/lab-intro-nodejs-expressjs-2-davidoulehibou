const express = require("express");
const app = express();

/**
 Check the documentation of expressjs middleware  
 https://expressjs.com/en/guide/using-middleware.html#using-middleware

 Todo: What is a middleware?
  [Answer here...]
 */

/*
  Todo: Write an expressjs middleware: verifyMidware   

  to verify a ?token='some token' query param exists in a GET, POST req 
  - if there is no token throw an error
  */


const verifyMiddleware = (req, res, next) => {
  const token = req.query.token;

  if (!token) {
    return res.status(401).json({ error: "Token is required" });
  }

  next();
};


app.use(verifyMiddleware); 


app.get("/", (req, res, next) => {
  const token = req.query.token;
  res.json({ message: `Welcome to the API! token : ${token}` });
});


app.listen(3000, () => {
  console.log("Server is listening on port 3000....");
});
