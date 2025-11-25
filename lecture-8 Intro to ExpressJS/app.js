
// // Core Module
// const http = require('http');      server create through express

// External Module
const express = require('express');

// Local Module
const userHandler = require('./user')

const app = express();
app.get("/",(req, res , next) => {
    console.log("this is a first middelwere", req.url, req.method);
    res.send("<h1>Welcome to first dashboard</h1>")
    next();
})
app.post("/submit-details",(req, res,next) =>{
    console.log("This is third middlewere" , req.url, req.method);
    res.send("<h1>Welcome to another dashboard</h1>")
})
app.use("/",(req, res , next) => {
    console.log("this is a second middelwere", req.url, req.method);
    res.send("<h1>Welcome to second middlewere</h1>")
    // next();
})


// const server = http.createServer(app)

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
})
