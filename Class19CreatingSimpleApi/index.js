//not workings
const fs = require("fs");
const http = require("http");



const server = http.createServer(( req , res )=>{

    const datas = fs.readFileSync(`${__dirname}/jsObj.json` ,"utf-8");
    const parsed = JSON.parse(datas);
    if(req.url === "/"){
        console.log(req.url);
        res.end("Hello from Home  side") ;
    }else if(req.url === "/about"){
        res.end("Hello from the ABOUT US side");
    }else if(req.url === "/contact"){
        res.end("welcome to contactus page");
    }else if(req.url === "/userapi"){
         res.writeHead(200, {"Content-type":"application/json"});
        //  res.end(parsed);

    }else{
        // writeHead takes the response code if there is any
        // entering document type as HTML
        res.writeHead(404 ,{ "Content-type" : "text/html" });
        res.end("<h1>404 error page </h1>");
    }
});

// in listen we need to give unused port

server.listen(7500 , "127.0.0.1" , () => {
    console.log("listening to the port no. 7500");
});





