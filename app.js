const express = require('express');
const app = express();
const mongoose =  require('mongoose');
const postsRoute =require('./routes/posts');
const bodyParser =require('body-parser');
const getRoute = require('./routes/get')

app.use(bodyParser.json());
//----------->>>
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
//--------------->>>>

app.use('/posts', postsRoute);
app.use('/get', getRoute);


mongoose.connect('mongodb+srv://walidzein:walid@cluster0-fkxls.mongodb.net/test?retryWrites=true&w=majority', 
 { useNewUrlParser: true } ,
    ()=> {
        console.log("connected to db");

})

app.listen(3000);