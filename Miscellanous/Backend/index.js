const express = require("express");
const app = express();
const port =8080;

app.get("/register",(req,res)=>{

    let {user,password}=req.query;
    res.send(`Basic Get Response Welcome ${user}!`);
});

app.post("/register",(req,res)=>{
    res.send("basic post Response");
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});