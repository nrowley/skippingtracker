//routes for /
const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');
const connectDB = require('../config/db');
const ejs = require('ejs');


router.use(express.json());
router.use(express.urlencoded({extended:false}));

//handle the user entering the exercise details
router.post('/',(req,res)=>{

    console.log(req.body);
    try{
    
        const{duration,intensity,email} = req.body;
        if(ValidateEmail(email)){
            connectDB()

            var calories = getCalories(intensity,duration);

            const newExercise = new Exercise({
                email,
                intensity,
                duration,
                calories: calories
            })

            console.log(newExercise);

            newExercise.save();

            res.render('overview',{data:{intensity,duration,calories}});
        }
        else{
            console.log('invalid email or intensity');
            res.redirect('/');
        }
    }
    catch(error){
        console.log(error);
        res.status(500).end(`Error : ${error}`);
    }
    
     
})

function getCalories(duration,intensity){

    //simple calculation to return calorie burned 
    //for given duration of skipping.
    return 15*duration*(intensity/10);

}

function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true;
  }
    return false;
}
module.exports = router;