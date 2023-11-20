// mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://test:12345@cluster0.x65rnow.mongodb.net/votingdb");
var db = mongoose.connection;
db.on("open", () => {
  console.log("established connection");
});
db.on("error", () => {
  console.log("error occured");
});

// express
const express = require("express");
const app = express();

// to avoid errors regarding local host access permissions
const body_parser = require("body-parser");
const cors = require("cors");
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(cors());

//express contd
const userRoute = require("./controller/userRoute");
app.use("/userRoute", userRoute);

const pollRoute = require("./controller/pollRoute");
app.use("/pollRoute", pollRoute);

app.listen(4000, () => {
  console.log("Server Started at port 4000");
});
