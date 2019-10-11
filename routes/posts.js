const express = require('express');
const router  = express.Router();
const users = require('../models/CardHolder');
const applications = require('../models/Application');
const uuid = require('uuidv4').default;


router.post('/postCardHolderInfo', (req, res)=> {
    const userinfo = new users({
         name: req.body.name,
         ssn: req.body.ssn,
         dob: req.body.dob,
         address: req.body.address,
         city: req.body.city,
         state: req.body.state,
         zip: req.body.zip,
        
    })

    userinfo.save().then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({messsage : err});
    })
});

router.post('/SubmitApplication', (req, res)=> {
    const application = new applications({

    
    ssn: req.body.ssn,
    appID : uuid(),
    Income: req.body.Income,
    CreditScore: req.body.CreditScore,
    Status: req.body.Status,
})
    application.save().then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({messsage : err});
    })
});
//7047ed64-bfd8-4412-9b57-ba35f3f3bd6b
router.patch('/status/:ssn', async (req,res) => {
    try{
        const updated  = await applications.updateOne({ssn: req.params.ssn}, 
            {$set:{Status: req.body.Status}});
    
            res.json(updated);
    }catch(err){
        res.json({message: err})
    }
        
});


module.exports = router;