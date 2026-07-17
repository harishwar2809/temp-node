import {readFile,writeFile} from "fs"

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result;
    readFile('./content/subfolder/test.txt','utf-8',(err,result)=>{
       if(err){
        console.log(err);
        return
    }
    const second=result;
    writeFile('./content/result-async.txt','Here is result ahhahahaha',(err)=>{
          if(err){
        console.log(err);
        return
    }
    console.log("Success");
    }) 
    })
    
})// callback hell.