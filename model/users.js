const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/myProject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    userId: Number

  });

  usersSchema.pre('save', async function(next){
    if(this.isModified('password')){
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      }
    next();
  
  })

  const Users = mongoose.model("user", usersSchema);

  module.exports = Users;