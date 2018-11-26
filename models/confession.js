const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const confession = Schema({
category:{
  type:String,
  required: true
},
confess:{
  type: String,
  required: true
},
});

const Confession = mongoose.model('Confession', confession);

module.exports = Confession;
