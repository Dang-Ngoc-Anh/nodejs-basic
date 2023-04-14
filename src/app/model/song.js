const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Song = new Schema({
  name: { type: String  , },
  author: { type: String , },
  url: { type: String  , default : ''},
  links:{type : Object({
    images:{type: Array([{
        0:{type : Object({
          url:{type : String}
        })}
    }])}
  })}
});

module.exports = mongoose.model('coures' , Song);