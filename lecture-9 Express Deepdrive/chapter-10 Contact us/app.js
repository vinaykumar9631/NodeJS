

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use((req, res ,next) => {
    console.log("First Dummy middlewere", req.url, req.method);
    next();
})

app.use((req, res ,next) => {
    console.log("Second Dummy middlewere", req.url, req.method);
    next();
})
app.get("/",(req, res, next) => {
    console.log("Handling / for GET",req.url, req.method);
    res.send(`<h1>Welcome to complete coding ke sath!</h1>`)
})
app.get("/contact-us",(req, res, next) => {
    console.log("Handling /contact-us for GET",req.url, req.method);
    res.send(`
        <h1>Fill the Details here</h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your Name">
            <input type="email" name="Email" placeholder="Enter your Email">
            <input type="submit" value="Submit">
        </form>
        `)
})


app.post("/contact-us",(req, res, next) => {
    console.log("before bodyParser",req.url, req.method,req.body);
    next()
})

app.use(bodyParser.urlencoded())

app.post("/contact-us",(req, res, next) => {
    console.log("Handling /contact-us for GET",req.url, req.method,req.body);
    res.send(`<h1>Thanks for submitting your details. We will contact you soon!</h1>`)
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
})