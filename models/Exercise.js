const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({

    email:{
        type: String,
        trim: true,
        required:true
    },
    intensity:{
        type: Number,
        required:true    
    },
    duration:{
        type: Number,
        required:true
    },
    calories:{
        type:Number,
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }


});

module.exports = mongoose.model('Exercise',ExerciseSchema);