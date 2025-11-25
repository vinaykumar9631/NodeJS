
// GET Request

const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);   // check url , methods , headers

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title> Vinay Coding </title></head>')
        res.write('<h1> Welcome to Home </h1>')
        res.write('</html>')
        return res.end();
    }
    else if(req.url === '/products'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title> Vinay Coding </title></head>')
        res.write('<h1> You can Seen products</h1>')
        res.write('</html>')
        return res.end();
    }
    else{
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title> Vinay Coding </title></head>')
    res.write('<h1> Hello Coders</h1>')
    res.write('</html>')
    res.end();
    }
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
})