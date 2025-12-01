

const path = require('path');

const express = require('express')
const hostRouter = express.Router();

// html single route
const rootDir = require('../utils/pathUtil');
const homesController = require('../controllers/homes');

hostRouter.get("/add-home",homesController.getAddHomes)
hostRouter.post("/add-home",homesController.postAddHomes)



exports.hostRouter = hostRouter;
