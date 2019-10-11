const express = require('express');
const router  = express.Router();
const users = require('../models/CardHolder');
const applications = require('../models/Application');
const mongoose =  require('mongoose');


router.get('/getApplication', async (req, res)=> {
    try{
        const user = await applications.find();
        res.json(user);

    }catch(err){
        res.json({message: err})
    }

})


router.get('/getApplicationbySSN/:ssn', async (req, res)=> {
    try{
        const user = await applications.find({ ssn: req.params.ssn },
        { _id: 0});
        res.json(user);

    }catch(err){
        res.json({message: err})
    }

})


router.get('/getCM', async (req, res)=> {
    try{
        const user = await users.find();
        res.json(user);

    }catch(err){
        res.json({message: err})
    }

})

router.get('/getCMinfo/:ssn', async (req, res)=> {

    try{
        const user = await users.find({ ssn: req.params.ssn },
        { _id: 0});
        res.json(user);

    }catch(err){
        res.json({message: err})
    }
})


router.get('/getCreditScore/:ssn', async (req, res)=> { 

    try{
        const user = await applications.find({ ssn: req.params.ssn },
        { _id: 0, "CreditScore" : 1});
        res.json(user);

    }catch(err){
        res.json({message: err})
    }
    
})
    

router.get('/getHousingInfo/:ssn', async (req, res)=> {
    try{
     const user = await users.find({ ssn: req.params.ssn },
        { _id: 0, "address": 1, "city" : 1, "state": 1, "zip": 1});
        
      res.json(user);
        

    }catch(err){
        res.json({message: err})
    }

})

router.get('/getStatus/:ssn', async (req, res)=> {
    try{
        const user = await applications.find({ ssn: req.params.ssn },
         { _id: 0, "Status" : 1 });
        res.json(user);

    }catch(err){
        res.json({message: err})
    }

});



module.exports = router;
