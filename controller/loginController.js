const Users = require('../model/users')
const bcrypt = require('bcrypt');

async function login(req,res){
    try {
      const user = await Users.find({
        email: req.body.email,
      });
      const userId = user[0].userId

   
  
      if (await bcrypt.compare(req.body.password, user[0].password)) {
        res.status(200).json({ userId: userId, message: "login successfull" });
        console.log("successfully logged in");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "server error" });
    }

}


module.exports= {
    login
}