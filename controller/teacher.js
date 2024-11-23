import teacherModel from "../model/teacher.js";
import crypto from 'crypto';
import userModel from "../model/user.js";
import positionModel from "../model/position.js";

const teacherControllers = {
    //Lấy list giáo viên
    getListTeacher: async (req,res) => {
        try {
            const { page, limit } = req.query;

            const pageSize = parseInt(limit) || 100;
            const pageNumber = parseInt(page) || 1; //current page

            const totalItems = await teacherModel.countDocuments();
            // const totalPages = Math.ceil(totalItems / pageSize);
            const skip = (pageNumber - 1) * pageSize;
            
            const teacherData = await teacherModel.find().skip(skip).limit(pageSize).populate("teacherPositionsId").populate("userId");
            console.log(teacherData)
            res.status(200).send({
                message: "Success!",
                data: teacherData
            })
           
        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
    createTeacher: async (req,res, next) => {
        try {
            const newTeacher = {
                userId: req.body.userId,
                isActive: req.body.isActive,
                code: crypto.randomBytes(4).toString('hex'),
                startDate: new Date(),
                teacherPositionsId: req.body.teacherPositionId, 
                degrees: req.body.degrees,
                    type: req.body.degreetype,
                    school: req.body.school,
                    major: req.body.major,
                    year: req.body.year,
                    isGraduated: req.body.isGraduated      
                ,
                address: req.body.address
            }

            //Postman format for create-teacher
            /*{
   
                "userId": "",
                "isActive": ,
                "isDeleted": ,
                "teacherPositionId": [""], 
                "degrees": [{
                    "type": "",
                    "school": "",
                    "major": "",
                    "year": ,
                    "isGraduated": 
                }],
                "address": ""
            
            }*/

            const createdTeacher = await teacherModel.create(newTeacher)
             res.status(200).send({
             message: "Success!",
             data: createdTeacher
             })

        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
    deleteAllTeacher: async (req,res) => {
        try {
            teacherModel.deleteMany({})
  .then(() => {
    console.log('All teachers deleted successfully');
  })
  .catch(err => {
    console.error('Error deleting teachers:', err);
  });
           
        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
}

export default teacherControllers;