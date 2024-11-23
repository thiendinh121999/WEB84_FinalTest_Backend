import positionModel from "../model/position.js";

const positionControllers = {
    //Lấy list position
    getListPosition: async (req,res) => {
        try {
            
            const positionData = await positionModel.find();
            res.status(200).json({
                message: "Success!",
                data: positionData
            })
           
        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
    createPosition: async (req,res, next) => {
        try {
            const newPosition = {
                name: req.body.name,
                code: req.body.code,
                description: req.body.description,
                isActive: req.body.isActive,
                isDeleted: req.body.isDeleted, 
            }

            //Postman format for create-position
            /*{
   
                "name": "",
                "code": "",
                "description": "",
                "isActive": ,
                "isDeleted": ,
                 
            }*/

            const createdPosition = await positionModel.create(newPosition)
             res.status(200).send({
             message: "Success!",
             data: createdPosition
             })

        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
}

export default positionControllers;