import Users from "../../models/users";


async function signupService (req, res){
    try {
      const user = new Users({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });
      await user.save();
      res.status(200).send("added");

    } 
    catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  
  }

export default signupService;