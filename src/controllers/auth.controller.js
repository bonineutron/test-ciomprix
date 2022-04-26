import jwt from 'jsonwebtoken';
import User from '../models/users';
import Role from '../models/roles';

export const signin = async (req, res) => {
   try {
      // getting the request body
      const { email, password } = req.body;
      // search by email
      const userFound = await User.findOne({ email: email }).populate('roles');
      if (!userFound) return res.status(400).json({ message: 'Email not found' });
      // validate match password
      const matchPassword = await User.comparePassword(password, userFound.password);
      if (!matchPassword)
         return res.status(401).json({
            message: 'Invalid password'
         });
      // create token
      const token = jwt.sign({ id: userFound._id }, process.env.TOKEN_SECRET, {
         expiresIn: 3600 // 1 hour
      });
      // response
      res.json({ token });
   } catch (error) {
      console.log(error);
   }
};

export const signup = async (req, res) => {
   try {
      // getting the request body
      const { username, email, password } = req.body;
      // creating a new User Object
      const role = await Role.findOne({ name: 'user' });
      const newUser = new User({
         username,
         email,
         password: await User.encryptPassword(password),
         roles: [role._id]
      });
      // saving the user object in mongodb
      const savedUser = await newUser.save();
      // create a token
      const token = jwt.sign({ id: savedUser._id }, process.env.TOKEN_SECRET, {
         expiresIn: 3600 // 1 hour
      });
      // response
      return res.status(200).json({ token });
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
};
