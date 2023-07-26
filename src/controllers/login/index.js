import express from 'express';

import loginController from './loginController';

const router = express.Router();

router.post('/',loginController);

module.exports = router;