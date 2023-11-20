const mongoose = require("mongoose");
const express = require("express");

const pollRoute = express.Router();

const pollSchema = require("../model/pollSchema");
pollRoute.get("/", (req, res) => {
  pollSchema.find((err, data) => {
    if (err) {
      return err;
    } else {
      res.json(data);
    }
  });
});
pollRoute
  .route("/update-poll/:id")
  .get((req, res) => {
    pollSchema.find(mongoose.Types.ObjectId(req.params.id), (err, data) => {
      if (err) {
        return err;
      } else {
        res.json(data);
      }
    });
  })
  .put((req, res) => {
    pollSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), { $set: req.body }, (err, data) => {
      if (err) {
        return err;
      } else {
        res.json(data);
      }
    });
  });

pollRoute.delete("/delete-poll/:id", (req, res) => {
  pollSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
    if (err) return err;
    else {
      res.json(data);
    }
  });
});

pollRoute.post("/create-poll", (req, res) => {
  pollSchema.create(req.body, (err, data) => {
    if (err) {
      return err;
    } else {
      res.json(data);
    }
  });
});
module.exports = pollRoute;
