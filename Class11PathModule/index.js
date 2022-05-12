const path = require("path");

console.log(path.dirname("C:\BackUP\NodeJs\Class11PathModule\index.js"));
console.log(path.extname("C:\BackUP\NodeJs\Class11PathModule\index.js"));
console.log(path.parse("C:\BackUP\NodeJs\Class11PathModule\index.js"));

const mypath = path.parse("C:\BackUP\NodeJs\Class11PathModule\index.js");
console.log(mypath.name);

