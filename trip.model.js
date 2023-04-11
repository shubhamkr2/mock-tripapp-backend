const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  destinattion: {
    type: String,
  },
  no_of_travellers: {
    type: Number,
  },
  budget_per_person: {
    type: Number,
  },
});

const TripModel = mongoose.model("trips", tripSchema);
module.exports = TripModel;
