const Post = require("../model/post");

async function createPost(req, res) {
  try {
    console.log(req.session)
    const addPost = await Post.create({
      title: req.body.title,
      description: req.body.description,
      userId: req.session.userId,
    });
    await addPost.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
  res.status(200).send("post added");
}

module.exports = {
    createPost
}
