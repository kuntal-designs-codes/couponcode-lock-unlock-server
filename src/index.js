import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors'
import bodyParser from 'body-parser'
import mongoAtlasConnect from '../handler/dbConnect'
import router from './api';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoAtlasConnect();

app.use('/api', router);

// Creating Server at port 4000

app.listen( process.env.PORT , () => {
    console.log(`Server start sucessfully at port ${process.env.PORT}`);
})

