import express from 'express';

const router = express.Router();

router.use('/signup',require('./signup'));
router.use('/login',require('./login'));
router.use('/post',require('./post'));





export default router;

