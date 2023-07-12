const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    user : String,
    counter : Number
})

const Counter = mongoose.model('counter',counterSchema);

module.exports = Counter;