import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';


//app config
const app = express();
const port = process.env.PORT || 7000;
connectDB();
connectCloudinary();



// middlewares
app.use(express.json());
app.use(cors());


//initialize routes
app.use("/api/song", songRouter);

app.get('/', (req, res)=> res.send("Api Working"))

app.listen(port, ()=> console.log(`server listening on ${port}`));