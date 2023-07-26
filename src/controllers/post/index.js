import express from 'express';

import createPostController from './createPostController';
import listPostController from './listPostController';

const router = express.Router();

router.post('/create',createPostController);
router.get('/list',listPostController);

module.exports = router;