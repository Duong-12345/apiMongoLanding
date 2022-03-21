const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
        // default: Date.now   
    },
    phone:{
        type: String,
        required: true
    },
    provinceCode:{
        type: Number,
        require: true
    },
    districtCode:{
        type: Number,
        require:true
    },
    schoolCode:{
        type: Number,
        required: true
    },
    time:{
        type:String,
        required: true
    },
    numberOfParticipant:{
        type: Number,
        required:true
    },
    departmentCodes:{
        type: Array,
        required: true
    },
    programCodes:{
        type: Array,
        required: true
    },
    type:{
        type: String,
        require: true
    }
})



module.exports = mongoose.model('test',testSchema)