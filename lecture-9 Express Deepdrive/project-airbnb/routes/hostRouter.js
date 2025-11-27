

const path = require('path');

const express = require('express')
const hostRouter = express.Router();

// html single route
const rootDir = require('../utils/pathUtil');

hostRouter.get("/add-home",(req , res, next) => {

    // For attech html Registion Home  file
    res.sendFile(path.join(rootDir , 'views/registerHome.html'));
})


hostRouter.post("/add-home",(req , res, next) => {
    console.log(req.body);

    // For attech html Registion Successfull  file
    res.sendFile(path.join(rootDir , 'views/successfull.html'));
   
})

module.exports = hostRouter;