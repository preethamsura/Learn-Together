
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    
    email:{type: String, required:true},
    name: {type:String,required:true},
    skills_completed: [],
    skills_interested: [],
    friends: [],
    pfp: {type: String},
},{
    timestamps: true
})
module.exports = mongoose.model('User', UserSchema);