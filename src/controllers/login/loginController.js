import loginService from "../../services/login";

const loginController = (req, res) => {
  loginService(req)
    .then((loginToken) => {
      return res.status(200).json(loginToken);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};

export default loginController;
