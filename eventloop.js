const fs=require('fs');
setTimeout(()=>console.log("timmer 1 finisher"),0);
setImmediate(()=>console.log("immediate 1 finished"));
fs.readFile("test-file.txt",()=>
{
    console.log("file readding is finished");
    
    console.log("---------------------------------------------");
    setTimeout(()=>console.log("timmer 2 finisher"),0);
        setTimeout(()=>console.log("timmer 3 finisher"),3000);
     setImmediate(()=>console.log("immediate 1 finished"));
});
console.log("hello from the top level code");
