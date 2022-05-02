const os = require('os') ;

console.log(os.arch());   //x64 as output

console.log(os.hostname());
console.log(os.platform());
console.log(os.type());

const freeMemory = os.freemem();
console.log(`freeMemory is ${freeMemory/1024/1024/1024}`);

const totalMemory = os.totalmem();
console.log(`Total Memory is ${totalMemory/1024/1024/1024}`) ;