import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    
    name: {
        type: String,
        required:true
    },
    phoneNumber: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    identity: {
        type: String,
        required:true
    },
    dob: {
        type: Date,
        required:true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['STUDENT', 'TEACHER', 'ADMIN']
    },
    address: {
        type: String,
        required:true
    },
})


//Sử dụng schema vào mongoDB
const userModel = mongoose.model('users', userSchema);

export default userModel