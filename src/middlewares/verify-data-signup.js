import User from '../models/users';

export const verifyData = async (req, res, next) => {
   try {
      // getting the request body
      const { username, email } = req.body;
      // search by username
      const userFound = await User.findOne({ username: username });
      if (userFound) return res.status(400).json({ message: 'The user already exists' });
      // search by email
      const emailFound = await User.findOne({ email: email });
      if (emailFound) return res.status(400).json({ message: 'The email already exists' });
      next();
   } catch (error) {
      res.status(500).json({ message: error });
   }
};
