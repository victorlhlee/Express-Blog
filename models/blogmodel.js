var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//blueprint for data, defining your schema
var blogSchema = new Schema ({
  author: String,
  title: {type:String, required: true},
  body: String,
  date: Date
}); 

//architect; point of access
//model is a class that constructs documents
module.exports = mongoose.model("Blog", blogSchema);