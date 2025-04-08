import fs from "fs/promises";
const asyncwriter=async()=>{
    try{

    
     await fs.writeFile("./dataasync.csv","This is the async file.");
     console.log("File has")
}
asyncwriter();