// the http.createServer() method includes requestand response parameters which is 
// supplied by NodeJs.

// The request object can be used to get information about the current HTTP request 
// e.g. UTL ,Request  , Header and data .

// The response object can be used to send a response for a current HTTP request .

// If the response from the HTTP server is supposed to be displayed as HTML ,
// you should include an HTTP header with the correct content type.



const http = require("http");
const { type } = require("os");

// const url = require("url");


const server = http.createServer(( req , res )=>{
    if(req.url === "/"){
        console.log(req.url);
        res.end("Hello from Home  side") ;
    }else if(req.url === "/about"){
        res.end("Hello from the ABOUT US side");
    }else if(req.url === "/contact"){
        res.end("welcome to contactus page");
    }else{
        // writeHead takes the response code if there is any
        // entering document type as HTML
        res.writeHead(404 ,{ "Content-type" : "text/html" });
        res.end("<h1>404 error page </h1>");
    }
});

// in listen we need to give unused port

server.listen(7500 , "127.0.0.1" , () => {
    console.log("listening to the port no. 8000");
});





