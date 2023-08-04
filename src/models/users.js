import mongoose from "mongoose";
import bcrypt from 'bcrypt';

mongoose.connect("mongodb://localhost:27017/myProject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,

  });

  usersSchema.pre('save', async function(next){
    if(this.isModified('password')){
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      }
    next();
  
  })

  const Users = mongoose.model("user", usersSchema);

export default Users;