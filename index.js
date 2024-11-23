import express from 'express';
import mongoose, { get } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import RootRouter from './routes/index.js';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;
app.use(express.json());

await mongoose.connect('mongodb+srv://thiendinh121999:Bahoanghai123@learnmongo.nrrok.mongodb.net/web84_finaltest?retryWrites=true&w=majority&appName=LearnMongo'
).then(()=> {
    console.log('Connected database!')
})

app.use('/', RootRouter)

app.listen(PORT, () => {
    console.log('Server is running!');
}); 