import User from '../models/users';

export const getUsers = async (req, res) => {
   // search for users excluding certain parameters
   const users = await User.find({}, { password: 0, _id: 0, createdAt: 0, updatedAt: 0 });
   return res.json({ users });
};
