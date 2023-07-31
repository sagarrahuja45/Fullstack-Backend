import Post from "../../models/post";

async function updatePostService(req, res) {
  try {
    await Post.updateOne(
      {
        _id: req.query._id,
      },
      { $set: { title: req.body.title, description: req.body.description } }
    );
  } catch (error) {
    console.log(error);
  }
}

export default updatePostService;
