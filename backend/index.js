import express, { request, response } from "express";
import { PORT,mongoDBURL } from './config.js';
import mongoose from "mongoose";
import booksRoute from './routes/bookRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS Policy
//option 1: Allow All Origins with Default of cors(*)
app.use(cors());
//Option 2:Allow Custom Origins

// app.use(
//         cors({
//                 origin:"http://localhost:3000",
//                 methods: ['GET','POST','PUT','DELET'],
//                 allowedHeaders: ['Content-Type'],
//         })
// );

app.get('/', (request,response)=>{
        console.log(request);
        return response.status(234).send("fathima muth mani");
});
app.use('/books',booksRoute);

mongoose.connect(mongoDBURL)
.then(()=>{
        console.log('App connnected to database');
        app.listen(PORT, () => {
                console.log(`app is listen in port :${PORT}`);
        });
})
.catch((error)=>{
        console.log(error);
});