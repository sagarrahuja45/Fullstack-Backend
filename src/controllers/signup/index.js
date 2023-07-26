import express from 'express';

import signupController from "./signupController";

const router = express.Router();

router.post('/',signupController);

module.exports = router;