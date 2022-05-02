const fs = require("fs");

// fs.mkdir("./Class7AsyncMethods" ,(err)=>{
//     console.log("folder created");
// })

// fs.writeFile("./bio.txt","bio .txt file is created asynchronously",(err)=>{
//     console.log("bio.txt file is created");
// });

// fs.appendFile("./bio.txt" , "This is part going to append at end",(err)=>{
//     console.log("file data appended");
// })

// fs.readFile("./bio.txt" , "utf-8" , (err,data)=>{
//     console.log(data);
//     console.log(err);       //if you right wrong file name then error willl show
// })


// fs.rename("./bio.txt" , "./mybio.txt" , (err)=>{
//     console.log(err);
// })


// fs.unlink("./mybio.txt",(err)=>{
//     console.log("file deleted");
// })


fs.rmdir("./Class7AsyncMethods" , (err)=>{
    console.log("file deleted");
})



