
import listPostService from "../../services/post/listPostService";

const listPostController = (req, res) => {
    listPostService(req, res)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      console.log(">>>>")
      res.status(404).json(error);
    });
};

export default listPostController;
