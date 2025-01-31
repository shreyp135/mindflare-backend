import express from "express";
import cors from "cors";
import { UUID } from "uuidjs";
import users from "./data.js";

//express app congig
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//fetch the users from data.js
let currUsers = users;

//get request to fetch all users
app.get("/users", (req, res) => {
  res.json(currUsers);
  res.status(200);
});

//post request add user
app.post("/users", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const userid = UUID.generate();
  currUsers.push({ id: userid, user_name: name, email: email });
  console.log(currUsers);
  res.send("User added successfully");
  res.status(200);
});

//delete request to delete user by id
app.delete("/users/:id", (req, res) => {
  try {
    const id = req.params.id;
    currUsers = currUsers.filter((user) => user.id !== id);
    res.send("User deleted successfully");
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
