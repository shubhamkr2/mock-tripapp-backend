const { Router } = require("express");
const TripModel = require("../models/trip.model");

const tripRoute = Router();

// to post
tripRoute.post("/add", async (req, res) => {
  try {
    const payload = req.body;
    const newTrip = new TripModel(payload);
    await newTrip.save();
    res.send("Added Successfully");
  } catch (err) {
    console.log(err);
  }
});

//to get
tripRoute.get("/", async (req, res) => {
  try {
    let all_trip = await TripModel.find();
    res.send(all_trip);
  } catch (err) {
    console.log(err);
  }
});

module.exports = { tripRoute };
