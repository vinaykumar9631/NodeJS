
const sumRequestHandler = (req, res) => {
    console.log("1. In the Request handler",req.url);

    const body = [];
    let result;
    req.on("data", chunk => {
        console.log("2. Chunk came");
        console.log(chunk);
        body.push(chunk);
    });
    req.on("end", () => {
        console.log("3. End event came");
        const fullbody = Buffer.concat(body).toString();
        const params = new URLSearchParams(fullbody);
        const bodyObj = Object.fromEntries(params);
        result = Number(bodyObj.num1) + Number(bodyObj.num2);
        console.log(result);

    });
        console.log("4. Before sending response");
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

}
module.exports = { sumRequestHandler };