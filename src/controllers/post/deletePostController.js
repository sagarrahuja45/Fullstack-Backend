import postService from '../../services/post'

const deletePostController = (req, res) => {
  postService.deletePostService(req, res)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};

export default deletePostController;