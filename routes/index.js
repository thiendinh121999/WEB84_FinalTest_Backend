import express from 'express';
import TeacherRouter from './teacher.js';
import PositionRouter from './position.js';
import UserRouter from './user.js';


const RootRouter = express.Router();

RootRouter.use('/teacher', TeacherRouter);
RootRouter.use('/position', PositionRouter);
RootRouter.use('/user', UserRouter);

export default RootRouter;