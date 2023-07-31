import postService from "../../services/post";

const listPostController = (req, res) => {
  postService
    .listPostService(req, res)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};

export default listPostController;
