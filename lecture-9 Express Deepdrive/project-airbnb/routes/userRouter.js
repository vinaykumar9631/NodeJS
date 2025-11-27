

// Core Module for html path
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();


const rootDir = require('../utils/pathUtil')

userRouter.get("/",(req , res, next) => {

    // For attech html Home  file
    res.sendFile(path.join(rootDir, 'views/home.html'));
})

module.exports = userRouter;