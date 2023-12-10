import express from 'express';
import login from './login';
import signup from './signup';
import post from './post';

const router = express.Router();

router.use('/signup',signup);
router.use('/login',login);
router.use('/post',post);





export default router;

