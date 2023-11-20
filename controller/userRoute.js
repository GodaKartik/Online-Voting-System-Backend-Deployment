const mongoose = require("mongoose");
const express = require("express");

const userRoute = express.Router();

const userSchema = require("../model/userSchema");
userRoute.get("/", (req, res) => {
  userSchema.find((err, data) => {
    if (err) {
      return err;
    } else {
      res.json(data);
    }
  });
});
userRoute
  .route("/update-user:id")
  .get((req, res) => {
    userSchema.find(mongoose.Types.ObjectId(req.params.id), (err, data) => {
      if (err) {
        return err;
      } else {
        res.json(data);
      }
    });
  })
  .put((req, res) => {
    userSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), { $set: req.body }, (err, data) => {
      if (err) {
        return err;
      } else {
        res.json(data);
      }
    });
  });

userRoute.delete("/delete-user:id", (req, res) => {
  userSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
    if (err) return err;
    else {
      res.json(data);
    }
  });
});

userRoute.post("/create-user", (req, res) => {
  userSchema.create(req.body, (err, data) => {
    if (err) {
      return err;
    } else {
      res.json(data);
    }
  });
});
module.exports = userRoute;
