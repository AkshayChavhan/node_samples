// Consider modules to be the same as JS libraries .A set of functions 
// you want to include in your application.

// Node.js has a set of build-in modules which you can use without 
// any further installation.
// for eg: - FileSystem




// ==============
// const name = " Akshay " ;
// console.log(name);

// to run in terminal   ->    node class5CoreModule.js


// ================
// CORE MODULES 

const fs = require("fs");
fs.writeFileSync("read.txt","welcome to nodejs");

fs.writeFileSync("read.txt" , "welcome to Jumanji"); //rewriting existing data

fs.renameSync("index.js" , "class05Module.js");






