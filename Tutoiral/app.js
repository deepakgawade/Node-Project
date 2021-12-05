const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('Welcome to our homepage')
    }
    if(req.url==='/about'){
        res.end('Welcome to our Contact Page')
    }
   res.end(`<h1>Opps Lost Connection....</h1>
   <p>We can't  seem to find page</p>
   <a href="/">Back home</a>`)
})

server.listen(5000)