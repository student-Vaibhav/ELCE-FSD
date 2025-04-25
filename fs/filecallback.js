import fs from "fs";
const callbackWriter=()=>{fs.writeFile("dataCallback.csv","This is the callback file",(err)=>{
    if(err){
        console.log("Unable to write(Callback)",err);
    } else{
        console.log("File has been written successfully");
        
    }
})}
const callbackReader=()=>{
    fs.readFile("./dataCallback.csv","utf-8",(err,data)=>{
        if (err) {
            console.log("Unable to read data.(callback)",err);
        }
        else{
            console.log("Data is:",data);
        }
        })

}
export default{callbackWriter,callbackReader};
