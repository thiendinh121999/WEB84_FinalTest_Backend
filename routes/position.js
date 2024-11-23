import express from 'express';
import positionControllers from '../controller/posititon.js';


const PositionRouter = express.Router();

PositionRouter.get('/getlist-position', positionControllers.getListPosition) // localhost:8080/position/getlist-position
PositionRouter.post('/create-position' , positionControllers.createPosition) // localhost:8080/position/create-position

export default PositionRouter