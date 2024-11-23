import express from 'express';
import userControllers from '../controller/user.js';


const UserRouter = express.Router();

UserRouter.get('/getlist-user', userControllers.getListUser) // localhost:8080/user/getlist-teacher
UserRouter.post('/create-user' , userControllers.createUser) // localhost:8080/user/create-teacher

export default UserRouter