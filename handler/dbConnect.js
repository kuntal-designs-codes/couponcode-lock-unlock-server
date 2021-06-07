import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

const mongoAtlasConnect = ( ) => {
    //Database connect
    mongoose.connect(process.env.MOGODB_ATLAS_CONNECTION_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(con => {
        console.log("connected to MongoDB");
    }).catch(e => {
        console.log(e);
    });
}

export default mongoAtlasConnect;