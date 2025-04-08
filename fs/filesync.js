import fs from "fs";
//create file
const syncwriter=()=>fs.writeFileSync("./data.csv","This is the sync file");
//read file
 const syncreader=()=>{
    const fileData=fs.readFileSync("./data.csv","utf-8");
    console.log(fileData);
 }

//append file
const syncappend=()=>fs.appendFileSync("./data.csv","utf-8");
//delete (sync)
const syncdelete=()=>fs.unlinkSync("./data.csv","utf-8");
export default {syncreader,syncwriter,syncappend,syncdelete};