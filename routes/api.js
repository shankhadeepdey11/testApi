const express = require("express");
const router = express.Router();

const Users = require("../models/userSchema");

router.get("/users", (req, res, next) => {
  Users.find({}, { addedTime: 0, _id: 0, __v: 0 }).then((result) =>
    res.send(result)
  );
});

router.get("/users/:email", (req, res, next) => {
  Users.find(
    { email: req.params.email },
    { addedTime: 0, _id: 0, __v: 0 }
  ).then((result) => res.send(result));
});

router.post("/users", (req, res, next) => {
  Users.create(req.body)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
});

router.put("/users/:email", (req, res, next) => {
  Users.findOneAndUpdate({ email: req.params.email }, req.body).then((user) => {
    Users.findOne({ email: req.params.email }).then((user) => {
      res.send(song);
    });
  });
});

router.delete("/users/:email", (req, res, next) => {
  Users.findOneAndDelete({ email: req.params.email }).then((user) => {
    res.send(user);
  });
});

module.exports = router;
