const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Skill = Schema({
    name: {type: String, required: true},
    num_completed: {type: Number, required: true, default: 0}, 
    description: {type: String, required: true, default: ''},
    image: {type:String},
    date: {type: Date},
}, {
    timestamps: true
})

module.exports = mongoose.model('Skill', Skill)
