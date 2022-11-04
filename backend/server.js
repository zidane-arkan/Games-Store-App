import express from 'express';
import dotenv from 'dotenv';
import gamesRoutes from './routes/gamesRoute.js';
import mongoose from 'mongoose';

dotenv.config();

//Express App
const app = express();

//Connect To Db (Mongo)
mongoose.connect(process.env.MONGO_URI)
    .then(() => { 
        //Listen to req
        app.listen(process.env.PORT, () => {
            console.log("Listen Port 3000,Connected To DB");
        });
    })
    .catch((error) => {
        console.log(error);
    });

//Global Middleware (Use)
app.use((req, res, next) => {
    console.log(req.path, req.method);
    res.status(404);
    next();
});

app.use(express.json());

//Routes
//Route Api games (Will run in any req method)
app.use("/api/games", gamesRoutes);

//Middleware Post
// app.post("/update", (req, res) => {

// });