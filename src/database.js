import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://${process.env.USERMONGO}:${process.env.PASSWORDMONGO}@clusterciomprix.oqbav.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
   .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then(() => console.log(`DB is connected`))
   .catch((err) => console.log(err));
