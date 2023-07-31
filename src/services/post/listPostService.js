import Post from "../../models/post";
import jwt from 'jsonwebtoken';

const secretKey = 'mykey';

async function listPostService(req, res) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, secretKey);
      const userPost = await Post.find({
        userId: decodedToken
      });
      return Promise.resolve({userPost});
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
   
  }

  export default listPostService;
