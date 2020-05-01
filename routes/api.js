//Deals with ROUTES /api
//handles all routes for REST API
const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');
const connectDB = require('../config/db');


router.use(express.json());
router.use(express.urlencoded({extended:false}));

//Return JSON file for given username.
router.get('/:email', async (req,res) =>{

    try {
        connectDB();
        Exercise.findOne({email:req.params.email}).then(async email =>{
            if(!email){
                // Bad Request 400 email not found
                console.log(`A user with email ${req.params.email} doesnt exist`);
                res.status(400).send({error:`User with email ${req.params.email} doesnt exist`});

            }
            else{
                //200 OK email found
                const exercises = await Exercise.find({email:req.params.email});
                res.status(200).send(exercises);
            }
        });  

    } catch (err) {
        //internal server error so send code 500
        console.log(`Error: ${err}`);
        res.status(500).end('Server Error');
    }

})


module.exports = router;