import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema ({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    code: {
        type: String,
        unique: true,
    },
    startDate: {
        type: Date,
        timestamp: true
    },
    endDate: {
        type: Date,
        default: null
    },
    teacherPositionsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "positions",
        required: true
    }],
    degrees: [
        {
          type: { type: String, required: true},
          school: {type: String, required: true},
          major: { type: String, required: true},
          year: {type: Number, required: true},
          isGraduated: {type: Boolean, required: true}
        }
      ],
    address: {
        type: String,
        required: true
    },
})


//Sử dụng schema vào mongoDB
const teacherModel = mongoose.model('teachers', teacherSchema);

export default teacherModel