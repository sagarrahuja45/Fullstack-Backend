import express from 'express';

import createPostController from './createPostController';
import listPostController from './listPostController';
import deletePostController from './deletePostController';
import updatePostController from './updatePostController';

const router = express.Router();

router.post('/create',createPostController);
router.get('/list',listPostController);
router.delete('/delete',deletePostController);
router.put('/update',updatePostController);



module.exports = router;