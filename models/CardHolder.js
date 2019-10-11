const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    ssn: {
      type: Number,
      required: true
    },
    dob: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zip: {
      type: Number,
      required: true
    },
   
    
})

module.exports = mongoose.model('users', UserSchema);