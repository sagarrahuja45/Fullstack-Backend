const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title : String,
    description : String,
    userId : Number
})

const Post = mongoose.model('post', postSchema)

module.exports = Post;