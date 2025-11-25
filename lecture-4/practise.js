const https = require("http");

const server = https.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/home'){
    res.write(`<h1>welcome to Home</h1>`)
    return res.end();
  }
  else if(req.url === '/men'){
    res.write(`<h1>You can meet up to anyother men</h1>`)
    return res.end();
  }
  else if(req.url === '/women'){
    res.write(`<h1>Hello Womens !  How are you ?</h1>`)
    return res.end();
  }
  else if(req.url === '/kids'){
    res.write(`<h1>The live in all kids here.</h1>`)
    return req.end();
  }
  else if(req.url === '/cart'){
    res.write(`<h1>This is a shopping Cart. if you want to shopping somthing then you can this cart</h1>`)
    return res.end();
  }
  res.write(`
    <html lang="en">
    <head>
        <title>Myntra</title>
    </head>
    <body>
        <head>
            <nav>
                <ul>
                    <li><a href="/home" style="color: brown;>Home</a></li>
                    <li><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kids">Kids</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </head>
    </body>
    </html>
        `);
  res.end();
});
server.listen(3001, () => {
  console.log(`server running on address http://localhost:3001`);
});
