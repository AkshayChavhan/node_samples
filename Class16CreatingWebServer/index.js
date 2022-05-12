// the http.createServer() method includes requestand response parameters which is 
// supplied by NodeJs.

// The request object can be used to get information about the current HTTP request 
// e.g. UTL ,Request  , Header and data .

// The response object can be used to send a response for a current HTTP request .

// If the response from the HTTP server is supposed to be displayed as HTML ,
// you should include an HTTP header with the correct content type.



const http = require("http");

const server = http.createServer(( req , res )=>{
   res.write("hello");
   res.end("from other side") ;
})

// in listen we need to give unused port

server.listen(8000 , "127.0.0.1" , () => {
    console.log("listening to the port no. 8000");
});





