const express = require("express");
const router = express.Router();
const todoschema = require("../schemas/todoschema");
const mongoose = require("mongoose");
const Todo = new mongoose.model("Todo", todoschema);
// get 

router.get("/",(req,res) => {
    res.send("hello i am get route from todos")
})
// post a todo
router.post("/", async (req, res) => {
  const newtodo = new Todo(req.body);
  await newtodo.save((err) => {
    if (err) {
      res.status(500).json({
        error: "there is a sever side error",
      });
    } else {
      res.status(200).json({
        messsage: "todo insert successfully",
      });
    }
  });
});
// exports router
module.exports = router;
