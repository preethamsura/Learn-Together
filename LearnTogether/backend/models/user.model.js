const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
    username: {type:String,required:false, default:''},
    password: {type:String,required:false, default:''},
    name: {type:String,required:true},
    date: {type: Date, required:true},
    skills_completed: [],
    skills_interested: [],
    friends: [],
    pfp: { type: String },
},{
    timestamps: true
})

module.exports = mongoose.model('User', User)