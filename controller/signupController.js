const Users = require('../model/users');
const Counter = require('../model/counter');




async function signup (req, res){
    console.log(req.body);
    try {
      const counter = await Counter.find({
        user : 'sagar'
      })
      const usersId = counter[0].counter;
      const user = new Users({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        userId: usersId
      });
      await user.save();
     const updated =  await Counter.updateOne({
        user : 'sagar'
      },{
        $set: {
          counter:usersId+1
        }
      })
    } 
    catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  
    res.status(200).send("added");
  }

  module.exports = {
    signup
  }