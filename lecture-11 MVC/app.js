
const path = require('path');

// External Module
const express = require('express');

// Local Module
const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil')
const errorsController = require('./controllers/error')


const app = express();

app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.use((req , res, next) => {
    console.log(req.url, req.method);
    next();
})

app.use(express.urlencoded());

// Routes Middleware
app.use(userRouter);
app.use("/host",hostRouter);


app.use(errorsController.PageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
})