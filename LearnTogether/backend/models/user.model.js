const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
    username: {type:String,required:true},
    password: {type:String,required:true},
    name: {type:String,required:true},
    date: {type: Date, required:true},
    skills_completed: [],
    skills_interested: [],
    friends: [],
    pfp: { data: Buffer, contentType: String },
},{
    timestamps: true
})

module.exports = mongoose.model('User', User)