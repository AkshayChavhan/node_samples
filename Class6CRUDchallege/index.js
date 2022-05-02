// CRUD operations
// C - CREATE   - create folder name Thapa , bio.txt file inside Thapa
// R - RENAME   - 
// U - UPDATE
// D - DELETE


const fs = require("fs");

// fs.mkdirSync("thapa");


// fs.writeFileSync("thapa/bio.txt","my name is Akshay Chavhan");

// fs.appendFileSync("thapa/bio.txt" , "I am appending data to the bio.txt file");

const data = fs.readFileSync("/thapa/bio.txt" , "utf-8");

console.log(data);
