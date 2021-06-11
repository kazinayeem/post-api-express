// file import
const express = require("express");
const mongoose = require("mongoose");
const todohandeler = require("./route/todohandeler");
// server port
const port = 4000;
// express init
const app = express();
app.use(express.json())

// mongoose connect
mongoose
  .connect("mongodb://localhost/mytodos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected successful!!");
  })
  .catch((err) => {
    console.log(err);
  });
// home route
app.get("/", (req, res) => {
  res.send("<h1>home page</h1>");
});

// app route todohandeler
app.use("/todos",todohandeler)

// server start
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
