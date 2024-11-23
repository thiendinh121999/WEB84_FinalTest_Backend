import mongoose from "mongoose";

const positionSchema = new mongoose.Schema ({

    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
})


//Sử dụng schema vào mongoDB
const positionModel = mongoose.model('positions', positionSchema);

export default positionModel