// this is example for text straming


const http = require("http");
const fs = require("fs");


const server = http.createServer();



// 1st way to stream not live

// server.on("request" ,(req,res) =>{
//     fs.readFile("index.txt",(err,data) =>{
//         if(err) return console.log(err);
//         res.end(data.toString());
//     })
// });

// server.listen("7501","127.0.0.1");




// 2nd type to stram live

// server.on("request" , (req,res)=>{

//     const rstream = fs.createReadStream("index.txt");
//     rstream.on("data" , (chunkdata)=>{
    //         res.write(chunkdata);
    //     });
    
    //     rstream.on("end" ,()=>{
        //         res.end();
        //     });
        
        //     rstream.on("error" , (err) =>{
            //         console.log(err);
            //         res.end("file not exist");
            //     })
            // });
            
            // server.listen(7501,"127.0.0.1");
            
            
// 3rd type to stream live

server.on("request" , (req ,res ) => {
    const rstream = fs.createReadStream("index.txt");

    rstream.pipe(res);
});

server.listen(7501 , "127.0.0.1");







            
            
            
            
            

