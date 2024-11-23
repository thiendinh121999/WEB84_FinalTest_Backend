import userModel from "../model/user.js";

const userControllers = {
    //Lấy list giáo viên
    getListUser: async (req,res) => {
        try {
            
            const userData = await userModel.find();
            console.log(userData)
            res.status(200).send({
                message: "Success!",
                data: userData
            })
           
        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
    createUser: async (req,res, next) => {
        try {
            const newUser = {
                name: req.body.name ,
                phoneNumber: req.body.phoneNumber ,
                email: req.body.email ,
                identity: req.body.identity ,
                dob: req.body.dob ,
                isDeleted: req.body.isDeleted ,
                role: req.body.role ,
                address: req.body.address ,
            }

            //Postman format for create-position
            /*{
   
                "name": "",
                "phoneNumber": "",
                "email": "",
                "identity": "",
                "dob": ,
                "isDeleted": ,
                "role": "yyyy-mm-dd",
                "address": ""
                 
            }*/

            const createdUser = await userModel.create(newUser)
             res.status(200).send({
             message: "Success!",
             data: createdUser
             })

        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
}

export default userControllers;