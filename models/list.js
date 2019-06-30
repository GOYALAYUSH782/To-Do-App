var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//defining the schema for db
var listItem = new Schema({
    title:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    }
})
// exporting the schema
var list = mongoose.model('list', listItem);
module.exports = list;