const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const confession = Schema({
category:{
  type:String,
  required: true
},
confession:{
  type: String,
  required: true
},
likes:{
  type:Number,
  default: 0
},
dislikes:{
  type: Number,
  default: 0
}
});

const Confession = mongoose.model('Confession', confession);

module.exports = Confession;
