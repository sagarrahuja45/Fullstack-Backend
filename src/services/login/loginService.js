import Users from "../../models/users";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const secretKey = 'mykey';

async function loginService(req) {
    try {
      const user = await Users.findOne({ email: req.body.email });  
      const payload = user._id;
  
      if (bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign(JSON.stringify(payload), secretKey);
        return Promise.resolve({ token });
      }
  
      throw new UnauthorizedException('Invalid password');
    } catch (error) {
      return Promise.reject(
        error || new ServerException('Internal Server Error'),
      );
    }
  }

export default loginService;
