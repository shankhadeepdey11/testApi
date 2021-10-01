const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
mongoose
  .connect(
    "mongodb+srv://admin:Sanat6935@cluster0.pyxds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Succesfull"))
  .catch((err) => console.error(err));
mongoose.Promise = global.Promise;

const PORT = 3000;

app.get("/", (req, res) => res.send("Welcome To My Server"));

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", require("./routes/api"));
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});
app.listen(PORT, () => console.log("Server running"));
