import bcrypt from 'bcryptjs';
import Role from '../models/roles';
import User from '../models/users';

export const createRoles = async () => {
   try {
      // count documents
      const count = await Role.estimatedDocumentCount();
      // check for existing roles
      if (count > 0) return;
      // create default Roles
      const values = await Promise.all([new Role({ name: 'user' }).save(), new Role({ name: 'admin' }).save()]);
      console.log(values);
   } catch (error) {
      console.error(error);
   }
};

export const createAdmin = async () => {
   // check for an existing admin user
   const user = await User.findOne({ email: 'admin@ciomprix.com' });
   // get roles _id
   const roles = await Role.find({ name: { $in: ['admin'] } });
   if (!user) {
      // create a new admin user
      await User.create({
         username: 'ciomprixadmin',
         email: 'admin@ciomprix.com',
         password: await bcrypt.hash('admin', 10),
         roles: roles.map((role) => role._id)
      });
      console.log('Admin User Created!');
   }
};
