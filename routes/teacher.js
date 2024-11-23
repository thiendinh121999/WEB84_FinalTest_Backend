import express from 'express';
import teacherControllers from '../controller/teacher.js';


const TeacherRouter = express.Router();

TeacherRouter.get('/getlist-teacher', teacherControllers.getListTeacher) // localhost:8080/teacher/getlist-teacher
TeacherRouter.post('/create-teacher' , teacherControllers.createTeacher) // localhost:8080/teacher/create-teacher
TeacherRouter.delete('/delete-teacher' , teacherControllers.deleteAllTeacher) // localhost:8080/teacher/delete-teacher

export default TeacherRouter