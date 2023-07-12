const express = require('express');

const router = express.Router();
const addPost = require('../controller/createPostController')
const sessionMiddleware = require('../session');

router.use(sessionMiddleware);

router.post('/',addPost.createPost);

module.exports = router
