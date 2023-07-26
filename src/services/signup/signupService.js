import Users from "../../models/users";


async function signupService (req, res){
    console.log(req.body);
    try {
      const user = new Users({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });
      await user.save();
    } 
    catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  
    res.status(200).send("added");
  }

export default signupService;