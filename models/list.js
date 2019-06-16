var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

var list = mongoose.model('list', listItem);
module.exports.list;