const mongoose = require('mongoose');

const AppSchema = mongoose.Schema({
    
    ssn:{
       type: String,
       required: true
    },
    appID: {
      type: String,
    },
    Income: {
      type: Number,
      required: true,
      min: [25000, 'Too low'],
    },
    CreditScore: {
      type: Number,
      required: true,
      min: [659, 'Too low'],
    },
    Status: {
      type: String,
      default: "pending"
    },
    
})

module.exports = mongoose.model('applications', AppSchema);