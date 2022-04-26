import jwt from 'jsonwebtoken';

export const tokenValidation = async (req, res, next) => {
   // getting the request header
   const token = req.header('x-acess-token');
   if (!token) return res.status(403).json({ message: 'No token provided' });
   try {
      // validate token
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      req.userId = decoded.id;
      next();
   } catch (error) {
      return res.status(401).json({ message: 'Unauthorized!' });
   }
};
