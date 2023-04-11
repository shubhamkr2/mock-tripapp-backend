const express = require("express");
const { connection } = require("./config/db");
const { tripRoute } = require("./routes/trip.route");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/trip", tripRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Trip app");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to the database");
  } catch (err) {
    console.log(err);
  }
  console.log("Listening on port " + process.env.PORT);
});
