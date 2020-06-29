const mongoose = require('mongoose');
const Skill = require('./skill.model.js');
const Schema = mongoose.Schema;

var User = new Schema({
    id: String,
    username: {type:String,required:true},
    password: {type:String,required:true},
    name: {type:String,required:true},
    joined: {type: Date, required:true},
    /*skills: {
        completed:{
            type: [Skill], 
        },
        preferred:{
            type: [Skill],
        },required: true},*/
    pfp: { data: Buffer, contentType: String },
},{
    timestamps: true
})

module.exports = mongoose.model('User', User)