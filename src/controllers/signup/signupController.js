
import signupService from "../../services/signup";


const signupController = (req, res) => {
  signupService(req,res)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      error.stack || error
      return res.status(500).json({ error: 'Internal Server Error' });
    });
};


export default signupController;


