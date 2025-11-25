
 const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
                <head><title>Calculator Coding</title></head>
                <body>
                <h1>Enter Your Details:</h1>
                <a href="/calculator">Go to Calculator</a>>
                </body>
            </html>
            `)
        return res.end();
    }
    else if(req.url === '/calculator'){
        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
                <head><title>Calculator Coding </title></head>
                <body>
                <h1>Calculator Page</h1>
                <form action="/calculate-result" method="POST">
                    <input type="text" name="num1" placeholder="Enter first number">
                    <input type="text" name="num2" placeholder="Enter second number">
                    <input type="submit" value="Submit">
                </form>
                </body>
            </html>
            `)
        return res.end();
    }
    else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
        return sumRequestHandler(req, res);
    }
    else{
        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
                <head><title>Calculator Coding </title></head>
                <body>
                <h1>404 Page Does not Exist</h1>
                <a href="/">Go Back to Home</a>
                </body>
            </html>
            `)
        return res.end();
    }

};

module.exports = { requestHandler };

