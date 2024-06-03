import express from 'express';
import dotenv from "dotenv"
import messageRoutes from './routes/messages.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
//user ki id lene ke liye jo login hai using cookie 
import cookieParser from 'cookie-parser'; //protect route me use karne ke liye
import {app, server} from "./socket/socket.js"

// const app = express();     now using it in socket.io file
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); //to parse the incoming cookies from req.cookies
app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server is running on ${PORT}`);
})