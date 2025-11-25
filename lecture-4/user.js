

const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);   // check url , methods , headers

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title> Vinay Coding </title></head>')
        res.write('<body><h1>Enter Your Details:</h1>')
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter username"><br>')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male" />')
        res.write('<label for="female">female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female" />')
        res.write('<br><input type="submit" value="Submit">')
        res.write('</form>');

        res.write('</body>')
        res.write('</html>') 
        return res.end();
    }

    else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
        fs.writeFileSync('user.txt', 'Vinay Kumar');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
    
// Redirectiong Request
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