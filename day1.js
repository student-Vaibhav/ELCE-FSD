//const fs=require('fs');
//console.log("1");

//const data=fs.readFileSync("data.txt","utf8");
//console.log(data);
//console.log("2");
//sync data read module
//const fs=require('fs');
//fs.writeFileSync("elce.text","hi i am student of abes");
// const fs=require('fs');
// fs.writeFileSync("adi.txt");
// sync data write
//const fs=require('fs');
//fs.readFile("data.txt","utf8",(err,data)=>{
   // console.log(data)
//});
const fs=require('fs');
console.log("1");
fs.writeFile("elce.text","utf8",(err,data)=>{
    console.log(data)
 });
 console.log("2");








