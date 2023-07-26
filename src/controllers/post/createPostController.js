import createPostService from "../../services/post/createPostService";


const createPostController = (req, res) => {
  createPostService(req, res)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      console.log(">>>>")
      res.status(404).json(error);
    });
};

export default createPostController;
