const EventEmitter=require("events");
const http=require("http");
const myEmitter=new EventEmitter();

myEmitter.on("newsale",()=>{
    console.log("the sale is on");
    });
    myEmitter.on("newsale",()=>{
        console.log("customer name:sriharsha");
        });
        myEmitter.on("newsale",stock=>{
            console.log(`the number of products in sale  are ${stock}`);
        });
        myEmitter.emit("newsale",9);
    ////server
    const server=http.createServer();
    server.on("request",(req,res)=>
        {
            console.log("the request is accepted you are in server");
            res.end("you are in the new server");

        });
        server.on("request",(req,res)=>
        {
            console.log("in the second line");
              

        });
 server.listen(8000,"127.0.0.1",()=>
 {
    console.log("wating for the response");
 });