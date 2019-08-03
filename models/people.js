const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, require: true},
  phone: {type: Number, required: true},
  jobTitle: {type: String, required: true}
});

const People = mongoose.model('People', peopleSchema);

module.exports = People;
