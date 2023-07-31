import Post from "../../models/post";
import jwt from 'jsonwebtoken';

const secretKey = 'mykey';

async function createPostService(req, res) {
    try {
      const token = req.headers.token;
      const decodedToken = jwt.verify(token, secretKey);
      const addPost = await Post.create({
        title: req.body.title,
        description: req.body.description,
        userId: decodedToken
      });
      await addPost.save();
      res.status(200);
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
   
  }

  export default createPostService;
