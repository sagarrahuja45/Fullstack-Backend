const express = require('express')
const router = express.Router();
const login = require('../controller/loginController')
const sessionMiddleware = require('../session');

router.use(sessionMiddleware);

router.post('/',login.login);


module.exports = router;