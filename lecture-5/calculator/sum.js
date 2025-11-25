
const sumRequestHandler = (req, res) => {
    console.log("In the Request handler",req.url);

    const body = [];
    req.on("data", chunk => {
        console.log(chunk);
        body.push(chunk);
    });
    req.on("end", () => {
        const fullbody = Buffer.concat(body).toString();
        const params = new URLSearchParams(fullbody);
        const bodyObj = Object.fromEntries(params);
        const result = Number(bodyObj.num1) + Number(bodyObj.num2);
        console.log(result);


        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
                <head><title>Calculator Coding</title></head>
                <body>
                <h1>The result is: ${result}</h1>
                </body>
            </html>
            `)
        return res.end();
    });

}
module.exports = { sumRequestHandler };