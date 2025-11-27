

// Core Module for html path
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();



const {registeredHomes} = require('./hostRouter');

userRouter.get("/",(req , res, next) => {
    console.log(registeredHomes);
    
    // For attech html Home  file
    res.render('home', { registeredHomes: registeredHomes });
})

module.exports = userRouter;