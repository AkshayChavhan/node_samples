const jsObj = {
    name : "Akshay",
    surname : "Chavhan",
    middleName : "Gopilal",
    age : "23"
}

const jsonData = JSON.stringify(jsObj);         //obj to json conversion
console.log(jsonData);      //{"name":"Akshay","surname":"Chavhan","middleName":"Gopilal","age":"23"}

// challenge 
// convert data into json from obj and trasfer to that file
// create a file 
// convert again data into normal json.
// read the data in that file

const fs = require("fs");

const challengeObj = {
    village : "umari",
    taluka : "Kelapur",
    district : "Yavatmal"
}


// convert into json data 
const jsonDatas = JSON.stringify(challengeObj);
console.log(jsonDatas);         //{"village":"umari","taluka":"Kelapur","district":"Yavatmal"}


//creating a file and storing json data in it
// fs.writeFile("dataFetch.json",jsonDatas ,(err)=>{
//     console.log("fetching done");
// })

//converting data for reading purpose

const readableObj = JSON.parse(jsonDatas)
fs.readFile("dataFetch.json","utf-8" , (err,data)=>{
    const newData = JSON.parse(data)
    console.log(newData);
})
















